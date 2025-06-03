import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Minimize2, Maximize2, User, Sparkles } from 'lucide-react';
import { generateResponse } from '../utils/geminiApi';
import ReactMarkdown from 'react-markdown';
import {
  getRandomGreeting,
  containsGreeting,
  containsFarewell,
  containsThankYou,
  getRandomFarewell,
  getRandomThankYouResponse,
  enhanceResponse,
  getDemographicQuestions,
  DemographicQuestion,
  UserDemographics
} from '../utils/chatbotUtils';

interface Message {
  role: 'user' | 'model';
  content: string;
  animate?: boolean;
  isQuestion?: boolean;
  questionId?: string;
  options?: string[];
}

const TIAChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userDemographics, setUserDemographics] = useState<UserDemographics>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [demographicQuestionsComplete, setDemographicQuestionsComplete] = useState(false);
  const [conversationStarted, setConversationStarted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Demographic questions
  const demographicQuestions = getDemographicQuestions();

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Start conversation with greeting and first demographic question
  const startConversation = () => {
    if (conversationStarted) return;
    
    setConversationStarted(true);
    
    // Add initial greeting
    const initialGreeting = "👋 Hi there! I'm TIA, your Thoucentric Intelligent Assistant. I'm here to help you learn about our consulting services and solutions. Before we get started, I'd love to get to know you a bit better.";
    
    setMessages([{ role: 'model', content: initialGreeting, animate: true }]);
    
    // Ask first demographic question after a short delay
    setTimeout(() => {
      askNextDemographicQuestion();
    }, 1000);
  };

  // Function to ask the next demographic question
  const askNextDemographicQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    
    if (nextIndex >= demographicQuestions.length) {
      // All questions have been asked
      setDemographicQuestionsComplete(true);
      
      // Thank the user and transition to open conversation
      const thankYouMessage = `Thank you${userDemographics.name ? ', ' + userDemographics.name : ''}! It's great to meet you. How can I assist you with our consulting services${userDemographics.company ? ' for ' + userDemographics.company : ''} today?`;
      
      setMessages(prev => [
        ...prev,
        { role: 'model', content: thankYouMessage, animate: true }
      ]);
      
      return;
    }
    
    // Set current question index
    setCurrentQuestionIndex(nextIndex);
    
    // Get the question
    const question = demographicQuestions[nextIndex];
    
    // Add question to messages
    setMessages(prev => [
      ...prev,
      { 
        role: 'model', 
        content: question.question, 
        animate: true,
        isQuestion: true,
        questionId: question.id,
        options: question.options
      }
    ]);
  };

  // Handle user's answer to demographic question
  const handleDemographicAnswer = (answer: string, questionId: string) => {
    // Save the answer
    setUserDemographics(prev => ({
      ...prev,
      [questionId]: answer
    }));
    
    // If this is the name question, personalize the next response
    if (questionId === 'name') {
      // Add a personalized acknowledgment
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { 
            role: 'model', 
            content: `Nice to meet you, ${answer}! I'll remember your name.`, 
            animate: true 
          }
        ]);
        
        // Then ask the next question after a short delay
        setTimeout(() => {
          askNextDemographicQuestion();
        }, 800);
      }, 800);
    } else {
      // For other questions, just ask the next one after a short delay
      setTimeout(() => {
        askNextDemographicQuestion();
      }, 800);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    const userMessage = input.trim();
    setInput('');
    
    // Add user message to chat
    setMessages(prev => [...prev, { role: 'user', content: userMessage, animate: true }]);
    
    // If we're still collecting demographics, treat this as an answer to the current question
    if (!demographicQuestionsComplete && currentQuestionIndex >= 0 && currentQuestionIndex < demographicQuestions.length) {
      const currentQuestion = demographicQuestions[currentQuestionIndex];
      handleDemographicAnswer(userMessage, currentQuestion.id);
      return;
    }
    
    // Check for special patterns
    if (containsGreeting(userMessage)) {
      const greeting = getRandomGreeting();
      const personalizedGreeting = userDemographics.name 
        ? greeting.replace('there', userDemographics.name) 
        : greeting;
      
      setMessages(prev => [...prev, { role: 'model', content: personalizedGreeting, animate: true }]);
      return;
    }
    
    if (containsFarewell(userMessage)) {
      const farewell = getRandomFarewell();
      const personalizedFarewell = userDemographics.name 
        ? farewell.replace('there', userDemographics.name) 
        : farewell;
      
      setMessages(prev => [...prev, { role: 'model', content: personalizedFarewell, animate: true }]);
      return;
    }
    
    if (containsThankYou(userMessage)) {
      const response = getRandomThankYouResponse();
      const personalizedResponse = userDemographics.name 
        ? response.replace('there', userDemographics.name) 
        : response;
      
      setMessages(prev => [...prev, { role: 'model', content: personalizedResponse, animate: true }]);
      return;
    }
    
    // Set loading state
    setIsLoading(true);
    
    try {
      // Generate response using the utility function
      let responseText = await generateResponse(userMessage);
      
      // Enhance response to make it more human-like
      responseText = enhanceResponse(responseText);
      
      // Personalize with user's name if available
      if (userDemographics.name) {
        // Replace generic terms with the user's name
        responseText = responseText
          .replace(/\b(user|customer|client|you)\b/gi, userDemographics.name)
          .replace(/\b(hi there|hello there|hey there)\b/gi, `hi ${userDemographics.name}`);
      }
      
      // Add AI response to chat
      setMessages(prev => [...prev, { role: 'model', content: responseText, animate: true }]);
    } catch (error) {
      console.error('Error generating response:', error);
      setMessages(prev => [...prev, { 
        role: 'model', 
        content: `Sorry${userDemographics.name ? ', ' + userDemographics.name : ''}, I encountered an error. Please try again later.`,
        animate: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle clicking on a suggested option
  const handleOptionClick = (option: string, questionId: string) => {
    // Add user message to chat
    setMessages(prev => [...prev, { role: 'user', content: option, animate: true }]);
    
    // Process the answer
    handleDemographicAnswer(option, questionId);
  };

  const toggleChat = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsMinimized(false);
      if (!conversationStarted) {
        startConversation();
      }
    } else {
      setIsMinimized(!isMinimized);
    }
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-[#f16539] hover:bg-orange-600 text-white rounded-full p-0 shadow-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden group w-16 h-16"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-[#f16539] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="absolute inset-0 animate-pulse-ring rounded-full border-4 border-[#f16539] opacity-75"></span>
          <div className="relative z-10 w-full h-full rounded-full overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300" 
              alt="TIA Assistant" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-1 text-center text-white font-bold text-xs z-20">
            TIA
          </div>
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div 
          className={`bg-white dark:bg-gray-900 rounded-lg shadow-2xl flex flex-col transition-all duration-300 border border-gray-200 dark:border-gray-700
            ${isMinimized ? 'h-14 w-72' : 'h-[500px] w-[350px]'}`}
        >
          {/* Chat header */}
          <div className="bg-gradient-to-r from-[#f16539] to-orange-500 text-white p-3 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative mr-2">
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                  <img 
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150" 
                    alt="TIA Assistant" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-medium leading-tight">TIA</h3>
                <p className="text-xs text-white/80">Online</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={toggleChat} className="hover:bg-orange-600 rounded p-1 transition-colors">
                {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
              </button>
              <button onClick={closeChat} className="hover:bg-orange-600 rounded p-1 transition-colors">
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Chat body - only shown when not minimized */}
          {!isMinimized && (
            <>
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-4 flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.role === 'user'
                          ? 'bg-[#f16539] text-white rounded-tr-none'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-tl-none'
                      } ${message.animate ? 'animate-fadeIn' : ''}`}
                    >
                      <div className="flex items-center mb-1">
                        {message.role === 'model' ? (
                          <div className="flex items-center">
                            <div className="w-5 h-5 rounded-full overflow-hidden mr-1.5">
                              <img 
                                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150" 
                                alt="TIA" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <span className="text-xs font-medium flex items-center">
                              TIA
                              <Sparkles size={12} className="ml-1 text-yellow-400" />
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <User size={16} className="mr-1" />
                            <span className="text-xs font-medium">
                              {userDemographics.name || 'You'}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="text-sm whitespace-pre-wrap markdown-content">
                        <ReactMarkdown>
                          {message.content}
                        </ReactMarkdown>
                      </div>
                      
                      {/* Show options if this is a question with options */}
                      {message.role === 'model' && message.isQuestion && message.options && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {message.options.map((option, optionIndex) => (
                            <button
                              key={optionIndex}
                              onClick={() => message.questionId && handleOptionClick(option, message.questionId)}
                              className="px-3 py-1.5 text-sm bg-white dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-500 
                                         text-gray-800 dark:text-white rounded-full transition-all duration-200 
                                         hover:shadow-md border border-gray-300 dark:border-gray-500"
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start mb-4 animate-fadeIn">
                    <div className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg rounded-tl-none max-w-[80%] p-3">
                      <div className="flex items-center mb-1">
                        <div className="w-5 h-5 rounded-full overflow-hidden mr-1.5">
                          <img 
                            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150" 
                            alt="TIA" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-xs font-medium flex items-center">
                          TIA
                          <Sparkles size={12} className="ml-1 text-yellow-400" />
                        </span>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat input */}
              <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 dark:border-gray-700 flex">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={
                    !demographicQuestionsComplete && currentQuestionIndex >= 0 && currentQuestionIndex < demographicQuestions.length
                      ? demographicQuestions[currentQuestionIndex].placeholder || "Type your answer..."
                      : "Type your message..."
                  }
                  className="flex-1 border border-gray-300 dark:border-gray-600 rounded-l-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#f16539] focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  disabled={isLoading}
                  autoFocus
                />
                <button
                  type="submit"
                  className={`bg-[#f16539] text-white px-4 py-2.5 rounded-r-lg ${
                    isLoading || !input.trim() 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:bg-orange-600 transition-colors'
                  }`}
                  disabled={isLoading || !input.trim()}
                >
                  <Send size={18} />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default TIAChat; 