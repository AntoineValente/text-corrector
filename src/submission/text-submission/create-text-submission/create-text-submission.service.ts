import { Injectable } from '@nestjs/common';
import { CreateTextSubmissionDto } from './create-text-submission.dto';

@Injectable()
export class CreateTextSubmissionService {
  constructor() {}

  execute(dto: CreateTextSubmissionDto) {
    return dto;
  }
}
