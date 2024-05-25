import { ConfigService } from '@nestjs/config';
import { IAiModel } from './ai-model.interface';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GeminiService implements IAiModel {
  private readonly googleAiClient: GoogleGenerativeAI;

  constructor(configService: ConfigService) {
    this.googleAiClient = new GoogleGenerativeAI(
      configService.get<string>('GOOGLE_AI_API_KEY'),
    );
  }

  async generateContent(prompt: string) {
    const model = this.googleAiClient.getGenerativeModel({
      model: 'gemini-pro',
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  }
}
