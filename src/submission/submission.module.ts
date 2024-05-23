import { Module } from '@nestjs/common';
import { TextSubmissionRepositoryToken } from './text-submission/text-submission.interface';
import { TextSubmissionRepository } from './text-submission/text-submission.repository';
import { DatabaseModule } from 'src/database/database.module';
import { TextSubmissionController } from './text-submission/text-submission.controller';
import { CreateTextSubmissionService } from './text-submission/create-text-submission/create-text-submission.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    CreateTextSubmissionService,
    {
      provide: TextSubmissionRepositoryToken,
      useClass: TextSubmissionRepository,
    },
  ],
  controllers: [TextSubmissionController],
})
export class SubmissionModule {}
