import axios from "axios";
import { Request, RequestHandler, Response } from "express";

export const generateAiFlow: RequestHandler = async (req: Request, res: Response) => {
  try {
    const prompt = req.body.prompt;
    const aiUrl = process.env.AI_URL + '/output'

    axios.post(aiUrl, {
      prompt: prompt,
    })
    .then(function (response) {
      
    })
    .catch(function (error) {
      console.log(error);
    });
  
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Generation failed' });
  }
}