import axios from "axios";
import { Request, RequestHandler, Response } from "express";
const { GoogleGenerativeAI } = require("@google/generative-ai");

console.log("abcd");

export const generateAiFlow: RequestHandler = async (req: Request, res: Response) => {
  try {
    const prompt: string = req.body.prompt;
    const aiUrl: string = process.env.AI_URL + '/output';

    const aiResponse = await axios.get(aiUrl, {
      params: {
        prompt: prompt,
      },
    });

    const responseData: any = aiResponse.data; // Assuming response data type

    console.log(responseData);

    if (responseData[0].label === 'Generic Website Flow') {
      
      
      const apiKey: string = process.env.API_GOOGLE || '';
      const genAI = new GoogleGenerativeAI(apiKey);

      
      const guess: string = prompt;

      const result: string = await run(genAI, guess);
      console.log(result);
      const jsonString = JSON.stringify(result);

      const strippedJsonString = jsonString.replace('```json', '').replace('```', '');

      const strippedJsonObject = JSON.parse(strippedJsonString);


      
     
      res.send(strippedJsonObject);
    }
    else{
      res.status(200).json(responseData);
    }

   

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Generation failed' });
  }
};

async function run(genAI: any, guess: string): Promise<string> {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt: string = `I want you to act as a Node-RED JSON flow file generator for website monitoring. Provide me with a URL, and you will generate a Node-RED JSON flow file for monitoring that website. The flow should include nodes for HTTP request, response handling, and any necessary information to monitor the given website. Do not include explanations, only generate the Node-RED JSON flow file my first website is ${guess},`;

  console.log(prompt);

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  
  return text;
}
