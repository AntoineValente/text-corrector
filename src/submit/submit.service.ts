import { Inject, Injectable } from '@nestjs/common';
import { SubmitDto } from './submit.dto';
import { AiModelToken, IAiModel } from 'src/ai-model/ai-model.interface';

import { buildSubmitPrompt } from './submit.prompt';
import { parseSubmissionResult } from './submit.utils';
import { Result } from 'src/common/types/result';
import { TextSubmission } from 'src/text-submission/text-submission.entity';
import {
  TextSubmissionRepositoryToken,
  ITextSubmissionRepository,
} from 'src/text-submission/text-submission.interface';

@Injectable()
export class SubmitService {
  constructor(
    @Inject(AiModelToken) private readonly aiModel: IAiModel,
    @Inject(TextSubmissionRepositoryToken)
    private readonly textSubmissionRepository: ITextSubmissionRepository,
  ) {}

  async execute(dto: SubmitDto): Promise<Result<TextSubmission>> {
    const { content } = dto;

    const prompt = buildSubmitPrompt(content);

    const stringResult = await this.aiModel.generateContent(prompt);
    const parsedFlaggedTokens = parseSubmissionResult(stringResult);

    if (!parsedFlaggedTokens) {
      return {
        success: false,
        payload: null,
        message: 'Unable to parse the result',
      };
    }

    const textSubmission = await this.textSubmissionRepository.save({
      content,
      flaggedTokens: parsedFlaggedTokens,
    });

    return {
      success: true,
      payload: textSubmission,
    };
  }
}
