import { GoogleGenAI, Type } from "@google/genai";
import { AIAnalysisResult } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const analyzeYard = async (
  textDescription: string,
  imageBase64?: string
): Promise<AIAnalysisResult> => {
  if (!apiKey) {
    throw new Error("API Key not found");
  }

  const model = "gemini-3-flash-preview";

  const promptText = `
    You are an expert landscaper for a company called "Luis Landscaping".
    Analyze the user's request (and image if provided) regarding their yard.
    
    Company Services:
    - Lawn Maintenance (Mowing, Edging)
    - Landscaping Design (Hardscapes, planting plans)
    - Yard Cleanup (Leaf removal, debris)
    - Irrigation Systems (Install, repair)
    - Tree and Shrub Care (Pruning, health)
    - Seasonal Services (Snow removal, seasonal planting)

    Output a JSON response recommending the best services and a brief trustworthy professional explanation.
    The "estimatedDifficulty" should be "Low", "Medium", or "High".
  `;

  const parts: any[] = [{ text: promptText }];
  
  if (textDescription) {
    parts.push({ text: `User Description: ${textDescription}` });
  }

  if (imageBase64) {
    // Strip header if present (e.g., "data:image/jpeg;base64,")
    const base64Data = imageBase64.split(',')[1] || imageBase64;
    parts.push({
      inlineData: {
        mimeType: "image/jpeg",
        data: base64Data
      }
    });
  }

  try {
    const response = await ai.models.generateContent({
      model,
      contents: { parts },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            suggestion: { type: Type.STRING, description: "Professional advice and observation" },
            recommendedServices: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "List of service names from the company list that apply" 
            },
            estimatedDifficulty: { type: Type.STRING }
          },
          required: ["suggestion", "recommendedServices", "estimatedDifficulty"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as AIAnalysisResult;

  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    throw new Error("Failed to analyze. Please try again.");
  }
};