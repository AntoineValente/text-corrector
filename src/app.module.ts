import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubmissionModule } from './submission/submission.module';

@Module({
  imports: [SubmissionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
