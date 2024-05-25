import { InjectRepository } from '@nestjs/typeorm';
import { IUserRepository } from './user.interface';
import { BaseAbstractRepository } from 'src/common/repository/base.repository';
import { UserSchema } from 'src/database/schema/user.schema';
import { User } from './user.entity';
import { IBaseRepository } from 'src/common/repository/base.interface';

export class UserRepository
  extends BaseAbstractRepository<UserSchema>
  implements IUserRepository
{
  constructor(
    @InjectRepository(UserSchema)
    private readonly _userRepository: IBaseRepository<User>,
  ) {
    super(_userRepository);
  }
}
