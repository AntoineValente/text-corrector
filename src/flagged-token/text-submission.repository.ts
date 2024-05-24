import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IFlaggedTokenRepository } from './flagged-token';
import { BaseAbstractRepostitory } from 'src/common/repository/base.repository';
import { FlaggedTokenSchema } from 'src/database/schema/flagged-token.schema';
import { FlaggedToken } from './flagged-token.entity';

export class FlaggedTokenRepository
  extends BaseAbstractRepostitory<FlaggedTokenSchema>
  implements IFlaggedTokenRepository
{
  constructor(
    @InjectRepository(FlaggedTokenSchema)
    private readonly _FlaggedTokenRepository: Repository<FlaggedToken>,
  ) {
    super(_FlaggedTokenRepository);
  }
}
