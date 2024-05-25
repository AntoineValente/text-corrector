import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AiModelModule } from 'src/ai-model/ai-model.module';
import { SubmitService } from './submit.service';
import { FlaggedTokenModule } from 'src/flagged-token/flagged-token.module';
import { TextSubmissionModule } from 'src/text-submission/text-submission.module';
import { SubmitController } from './submit.controller';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    DatabaseModule,
    AiModelModule,
    FlaggedTokenModule,
    TextSubmissionModule,
    AuthModule,
    UserModule,
  ],
  providers: [SubmitService],
  controllers: [SubmitController],
})
export class SubmitModule {}
