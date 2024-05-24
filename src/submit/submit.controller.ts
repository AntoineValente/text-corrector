import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { SubmitService } from './submit.service';
import { SubmitDto } from './submit.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RequestWithUser } from 'src/auth/auth.types';

@Controller('submit')
export class SubmitController {
  constructor(private readonly submitService: SubmitService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  submit(@Body('content') content: string, @Req() request: RequestWithUser) {
    const dto: SubmitDto = {
      content,
      user: request.user,
    };
    return this.submitService.execute(dto);
  }
}
