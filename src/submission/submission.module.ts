import { Module } from '@nestjs/common';
import { TextSubmissionRepositoryToken } from './text-submission/text-submission.interface';
import { TextSubmissionRepository } from './text-submission/text-submission.repository';
import { DatabaseModule } from 'src/database/database.module';
import { TextSubmissionService } from './text-submission/text-submission.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    TextSubmissionService,
    {
      provide: TextSubmissionRepositoryToken,
      useClass: TextSubmissionRepository,
    },
  ],
  exports: [TextSubmissionService],
})
export class SubmissionModule {}
