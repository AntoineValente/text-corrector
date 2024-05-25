import { IBaseRepository } from 'src/common/repository/base.interface';
import { User } from './user.entity';

export const UserRepositoryToken = Symbol('UserRepository');
export interface IUserRepository extends IBaseRepository<User> {}
