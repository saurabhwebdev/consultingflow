import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Google Generative AI with your API key
const API_KEY = "AIzaSyDZoFDDCkGpkjLWw6AwERa14lHLjR8PYe0";
const MODEL_NAME = "models/gemini-2.5-flash-preview-05-20";

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: MODEL_NAME });

// Define system prompt for the assistant
const systemPrompt = `
You are TIA (Thoucentric Intelligent Assistant), a helpful AI assistant for Thoucentric consulting company.
Your responses should be professional, conversational, and helpful.
You should focus on providing information about Thoucentric's services, consulting expertise, and how the company can help clients.

About Thoucentric:
- Thoucentric is a global consulting firm specializing in digital transformation, strategy consulting, and technology implementation.
- The company has offices in India (Bangalore, Mumbai), United States (Austin), Netherlands (Rotterdam), Singapore, and United Kingdom (Harrow).
- Key services include business strategy, digital transformation, technology consulting, and implementation services.
- The company works across multiple industries including manufacturing, retail, healthcare, financial services, and technology.

When answering questions:
- Be conversational and natural in your responses, like a human consultant would be
- Use occasional filler words and conversational markers (e.g., "well", "you know", "actually")
- Vary your sentence structure and length to sound more natural
- If you don't know something specific about Thoucentric, provide general consulting industry information
- Maintain a professional, helpful tone
- Suggest contacting the company directly for specific inquiries about pricing, proposals, or detailed service information

You can use markdown formatting in your responses:
- Use *asterisks* for italic text
- Use **double asterisks** for bold text
- Use bullet points with hyphens (-)
- Use numbered lists (1., 2., etc.)
- Create headers with # (for main headers) and ## (for subheaders)

Remember to be conversational while maintaining professionalism. You're representing Thoucentric, so your tone should reflect the company's values of expertise, innovation, and client focus.
`;

/**
 * Generates a response from the Gemini API
 * @param message User's message
 * @returns Generated response text
 */
export async function generateResponse(message: string): Promise<string> {
  try {
    // Create chat history with system prompt
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "Please act according to the following instructions" }],
        },
        {
          role: "model",
          parts: [{ text: "I'll help you with that. What are the instructions?" }],
        },
        {
          role: "user",
          parts: [{ text: systemPrompt }],
        },
        {
          role: "model",
          parts: [{ text: "I understand my role as TIA (Thoucentric Intelligent Assistant). I'll provide professional, conversational, and helpful responses about Thoucentric's consulting services, expertise, and how the company can help clients. I'll maintain a professional yet natural tone, using occasional conversational elements to sound more human-like. I'll use markdown formatting when appropriate and suggest contacting the company directly for specific inquiries. How can I assist you today?" }],
        },
      ],
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      },
    });

    // Send the user's message
    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating response:', error);
    return 'Sorry, I encountered an error. Please try again later.';
  }
} 