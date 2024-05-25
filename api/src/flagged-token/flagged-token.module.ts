import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { FlaggedTokenRepositoryToken } from './flagged-token.interface';
import { FlaggedTokenRepository } from './flagged-token.repository';

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
