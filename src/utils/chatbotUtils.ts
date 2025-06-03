import trainingData from '../data/chatbotTrainer.json';

/**
 * Interface for demographic question
 */
export interface DemographicQuestion {
  id: string;
  question: string;
  type: string;
  options?: string[];
  placeholder?: string;
}

/**
 * Interface for user demographic data
 */
export interface UserDemographics {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  country?: string;
  role?: string;
  industry?: string;
  companySize?: string;
  challengeArea?: string;
  [key: string]: string | undefined;
}

/**
 * Get a random greeting message
 */
export function getRandomGreeting(): string {
  const greetings = trainingData.conversationalResponses.greetings;
  return greetings[Math.floor(Math.random() * greetings.length)];
}

/**
 * Get a random farewell message
 */
export function getRandomFarewell(): string {
  const farewells = trainingData.conversationalResponses.farewells;
  return farewells[Math.floor(Math.random() * farewells.length)];
}

/**
 * Get a random thank you response
 */
export function getRandomThankYouResponse(): string {
  const thanks = trainingData.conversationalResponses.thanks;
  return thanks[Math.floor(Math.random() * thanks.length)];
}

/**
 * Get a random confusion response
 */
export function getRandomConfusionResponse(): string {
  const confusion = trainingData.conversationalResponses.confusion;
  return confusion[Math.floor(Math.random() * confusion.length)];
}

/**
 * Get demographic questions
 */
export function getDemographicQuestions(): DemographicQuestion[] {
  return trainingData.demographicQuestions;
}

/**
 * Check if the message contains a greeting
 */
export function containsGreeting(message: string): boolean {
  const greetingPatterns = [
    /\b(hi|hello|hey|good morning|good afternoon|good evening|greetings|howdy)\b/i
  ];
  return greetingPatterns.some(pattern => pattern.test(message));
}

/**
 * Check if the message contains a farewell
 */
export function containsFarewell(message: string): boolean {
  const farewellPatterns = [
    /\b(bye|goodbye|see you|talk to you later|farewell|until next time|have a good day|take care)\b/i
  ];
  return farewellPatterns.some(pattern => pattern.test(message));
}

/**
 * Check if the message contains a thank you
 */
export function containsThankYou(message: string): boolean {
  const thankYouPatterns = [
    /\b(thank you|thanks|appreciate it|grateful|thx)\b/i
  ];
  return thankYouPatterns.some(pattern => pattern.test(message));
}

/**
 * Get a random female personality response fragment
 */
export function getRandomFemalePersonalityTrait(): string {
  const traits = trainingData.conversationalResponses.femalePersonality;
  return traits[Math.floor(Math.random() * traits.length)];
}

/**
 * Enhance the AI response to make it more human-like with a professional female persona
 */
export function enhanceResponse(response: string): string {
  // Add thinking indicators occasionally
  if (Math.random() < 0.25) {
    const thinkingIndicators = [
      "Hmm, ",
      "Let me think... ",
      "Well, ",
      "I believe ",
      "From what I understand, ",
      "Based on my experience, ",
      "In my professional opinion, "
    ];
    response = thinkingIndicators[Math.floor(Math.random() * thinkingIndicators.length)] + response;
  }
  
  // Add occasional fillers
  if (Math.random() < 0.2) {
    const fillers = [
      " if I may add,",
      " from my perspective,",
      " in my experience,",
      " if that makes sense?",
      " as you might expect,",
      " as I've seen with other clients,"
    ];
    const filler = fillers[Math.floor(Math.random() * fillers.length)];
    const sentences = response.split('. ');
    if (sentences.length > 1) {
      const randomIndex = Math.floor(Math.random() * (sentences.length - 1));
      sentences[randomIndex] = sentences[randomIndex] + filler;
      response = sentences.join('. ');
    }
  }
  
  // Occasionally add a professional female consultant touch
  if (Math.random() < 0.15 && response.length > 100) {
    const femaleTraits = getRandomFemalePersonalityTrait();
    const sentences = response.split('. ');
    if (sentences.length > 2) {
      // Insert the female trait somewhere in the middle
      const insertIndex = Math.floor(sentences.length / 2);
      sentences.splice(insertIndex, 0, femaleTraits);
      response = sentences.join('. ');
    } else {
      response = femaleTraits + " " + response;
    }
  }
  
  return response;
}

/**
 * Get company information from training data
 */
export function getCompanyInfo() {
  return trainingData.company;
}

/**
 * Get services information from training data
 */
export function getServicesInfo() {
  return trainingData.services;
}

/**
 * Get industries information from training data
 */
export function getIndustriesInfo() {
  return trainingData.industries;
}

/**
 * Get FAQ information from training data
 */
export function getFAQInfo() {
  return trainingData.faqs;
} 