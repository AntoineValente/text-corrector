import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubmissionModule } from './submission/submission.module';
import { DatabaseModule } from './database/database.module';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';
import { AiModelModule } from './ai-model/ai-model.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    SubmissionModule,
    CommonModule,
    AiModelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
