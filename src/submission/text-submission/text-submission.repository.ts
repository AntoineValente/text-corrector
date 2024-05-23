import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ITextSubmissionRepository } from './text-submission.interface';
import { TextSubmissionSchema } from 'src/database/schema/text-submission.schema';
import { TextSubmission } from './text-submission.entity';
import { BaseAbstractRepostitory } from 'src/common/repository/base.repository';

export class TextSubmissionRepository
  extends BaseAbstractRepostitory<TextSubmissionSchema>
  implements ITextSubmissionRepository
{
  constructor(
    @InjectRepository(TextSubmissionSchema)
    private readonly _textSubmissionRepository: Repository<TextSubmission>,
  ) {
    super(_textSubmissionRepository);
  }
}
