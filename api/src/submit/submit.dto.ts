import { User } from 'src/user/user.entity';

export class SubmitDto {
  content: string;
  user: User;
}
