import { Body, Controller, Post } from '@nestjs/common';
import { CreateTextSubmissionDto } from './create-text-submission/create-text-submission.dto';
import { CreateTextSubmissionService } from './create-text-submission/create-text-submission.service';

@Controller('text-submission')
export class TextSubmissionController {
  constructor(
    private readonly createSubmissionService: CreateTextSubmissionService,
  ) {}

  @Post()
  submit(@Body() dto: CreateTextSubmissionDto) {
    return this.createSubmissionService.execute(dto);
  }
}
