import { InjectRepository } from '@nestjs/typeorm';
import { IFlaggedTokenRepository } from './flagged-token.interface';
import { BaseAbstractRepository } from 'src/common/repository/base.repository';
import { FlaggedTokenSchema } from 'src/database/schema/flagged-token.schema';
import { FlaggedToken } from './flagged-token.entity';
import { IBaseRepository } from 'src/common/repository/base.interface';

export class FlaggedTokenRepository
  extends BaseAbstractRepository<FlaggedTokenSchema>
  implements IFlaggedTokenRepository
{
  constructor(
    @InjectRepository(FlaggedTokenSchema)
    private readonly _FlaggedTokenRepository: IBaseRepository<FlaggedToken>,
  ) {
    super(_FlaggedTokenRepository);
  }
}
