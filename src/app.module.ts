import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubmitModule } from './submit/submit.module';
import { DatabaseModule } from './database/database.module';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';
import { AiModelModule } from './ai-model/ai-model.module';
import { FlaggedTokenModule } from './flagged-token/flagged-token.module';
import { TextSubmissionModule } from './text-submission/text-submission.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    SubmitModule,
    CommonModule,
    AiModelModule,
    FlaggedTokenModule,
    TextSubmissionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
