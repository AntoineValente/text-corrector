import { Body, Controller, Post } from '@nestjs/common';
import { SubmitService } from './submit.service';
import { SubmitDto } from './submit.dto';

@Controller('submit')
export class SubmitController {
  constructor(private readonly submitService: SubmitService) {}

  @Post()
  submit(@Body() dto: SubmitDto) {
    return this.submitService.execute(dto);
  }
}
