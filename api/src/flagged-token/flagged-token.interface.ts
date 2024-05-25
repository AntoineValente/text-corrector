import { IBaseRepository } from 'src/common/repository/base.interface';
import { FlaggedToken } from './flagged-token.entity';

export const FlaggedTokenRepositoryToken = Symbol('FlaggedTokenRepository');
export interface IFlaggedTokenRepository
  extends IBaseRepository<FlaggedToken> {}
