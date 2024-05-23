import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TextSubmissionService } from './submission/text-submission/text-submission.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly textSubmissionService: TextSubmissionService,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    const result = await this.textSubmissionService.create();
    console.log({ result });

    return this.appService.getHello();
  }
}
