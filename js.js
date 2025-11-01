import { GoogleGenAI } from "@google/genai";
console.log("ssssssssssssssssssssssssssssssssss");
// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-flash-latest",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

main();
