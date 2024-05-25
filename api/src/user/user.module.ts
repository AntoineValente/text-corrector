import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UserRepositoryToken } from './user.interface';
import { UserRepository } from './user.repository';

@Module({
  imports: [DatabaseModule],
  exports: [UserRepositoryToken],
  providers: [
    {
      provide: UserRepositoryToken,
      useClass: UserRepository,
    },
  ],
})
export class UserModule {}
