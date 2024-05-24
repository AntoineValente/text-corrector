import { User } from 'src/user/user.entity';

export type RequestWithUser = Request & {
  user: User;
};
