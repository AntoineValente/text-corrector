import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TextSubmissionRepositoryToken } from './text-submission.interface';
import { TextSubmissionRepository } from './text-submission.repository';

@Module({
  imports: [DatabaseModule],
  exports: [TextSubmissionRepositoryToken],
  providers: [
    {
      provide: TextSubmissionRepositoryToken,
      useClass: TextSubmissionRepository,
    },
  ],
})
export class TextSubmissionModule {}
