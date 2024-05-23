import { Inject, Injectable } from '@nestjs/common';
import {
  ITextSubmissionRepository,
  TextSubmissionRepositoryToken,
} from './text-submission.interface';

@Injectable()
export class TextSubmissionService {
  constructor(
    @Inject(TextSubmissionRepositoryToken)
    private readonly textSubmissionRepository: ITextSubmissionRepository,
  ) {}

  async create() {
    const a = await this.textSubmissionRepository.create({
      content: 'hello',
    });

    return a;
  }
}