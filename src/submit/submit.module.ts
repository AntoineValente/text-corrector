import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AiModelModule } from 'src/ai-model/ai-model.module';
import { SubmitService } from './submit.service';
import { FlaggedTokenModule } from 'src/flagged-token/flagged-token.module';
import { TextSubmissionModule } from 'src/text-submission/text-submission.module';
import { SubmitController } from './submit.controller';

@Module({
  imports: [
    DatabaseModule,
    AiModelModule,
    FlaggedTokenModule,
    TextSubmissionModule,
  ],
  providers: [SubmitService],
  controllers: [SubmitController],
})
export class SubmitModule {}
