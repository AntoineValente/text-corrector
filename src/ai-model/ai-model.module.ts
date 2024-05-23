import { Module } from '@nestjs/common';
import { AiModelToken } from './ai-model.interface';
import { GeminiService } from './gemini.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  exports: [AiModelToken],
  providers: [
    {
      provide: AiModelToken,
      useClass: GeminiService,
    },
  ],
})
export class AiModelModule {}
