import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubmissionModule } from './submission/submission.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [SubmissionModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
