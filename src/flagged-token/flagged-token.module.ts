import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { FlaggedTokenRepositoryToken } from './flagged-token';
import { FlaggedTokenRepository } from './text-submission.repository';

@Module({
  imports: [DatabaseModule],
  exports: [FlaggedTokenRepositoryToken],
  providers: [
    {
      provide: FlaggedTokenRepositoryToken,
      useClass: FlaggedTokenRepository,
    },
  ],
})
export class FlaggedTokenModule {}
