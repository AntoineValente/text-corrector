import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FlaggedTokenSchema } from './flagged-token.schema';
import { TextSubmission } from 'src/text-submission/text-submission.entity';
import { UserSchema } from './user.schema';

@Entity('text_submission')
export class TextSubmissionSchema implements TextSubmission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @OneToMany(
    () => FlaggedTokenSchema,
    (flaggedToken) => flaggedToken.textSubmission,
  )
  flaggedTokens?: FlaggedTokenSchema[];

  @ManyToOne(() => UserSchema, (user) => user.textSubmissions)
  user: UserSchema;

  @CreateDateColumn()
  createdAt: Date;
}
