import { InjectRepository } from '@nestjs/typeorm';
import { ITextSubmissionRepository } from './text-submission.interface';
import { TextSubmissionSchema } from 'src/database/schema/text-submission.schema';
import { TextSubmission } from './text-submission.entity';
import { BaseAbstractRepository } from 'src/common/repository/base.repository';
import { IBaseRepository } from 'src/common/repository/base.interface';

export class TextSubmissionRepository
  extends BaseAbstractRepository<TextSubmissionSchema>
  implements ITextSubmissionRepository
{
  constructor(
    @InjectRepository(TextSubmissionSchema)
    private readonly _textSubmissionRepository: IBaseRepository<TextSubmission>,
  ) {
    super(_textSubmissionRepository);
  }
}
