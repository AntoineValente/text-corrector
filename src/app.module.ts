import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubmissionModule } from './submission/submission.module';
import { DatabaseModule } from './database/database.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [DatabaseModule, SubmissionModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
