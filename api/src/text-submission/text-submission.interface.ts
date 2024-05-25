import { IBaseRepository } from 'src/common/repository/base.interface';
import { TextSubmission } from './text-submission.entity';

export const TextSubmissionRepositoryToken = Symbol('TextSubmissionRepository');
export interface ITextSubmissionRepository
  extends IBaseRepository<TextSubmission> {}
