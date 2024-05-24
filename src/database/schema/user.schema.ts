import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { User } from 'src/user/user.entity';
import { TextSubmissionSchema } from './text-submission.schema';

@Entity('user')
export class UserSchema implements User {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @OneToMany(
    () => TextSubmissionSchema,
    (textSubmission) => textSubmission.user,
  )
  textSubmissions?: TextSubmissionSchema[];
}
