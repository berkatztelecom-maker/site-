
import { GoogleGenAI } from "@google/genai";
import { SPEAKERS, AGENDA } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the "Global Vision 2025" Virtual Assistant. 
Your goal is to help potential attendees with information about the conference.
Here is the conference data:
Speakers: ${JSON.stringify(SPEAKERS)}
Agenda: ${JSON.stringify(AGENDA)}

Details:
Date: October 24-26, 2025
Location: Palais des Congrès, Paris, France (and Virtual)
Theme: "Building a Responsible Future"

Answer concisely and professionally. If someone asks for a registration link, tell them to use the "Register Now" form on the page. 
Always be helpful, polite, and enthusiastic about the event.
If you don't know the answer, politely suggest they contact support@globalvision2025.com.
`;

export async function getConferenceAssistantResponse(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my brain right now. Please try again in a moment!";
  }
}
