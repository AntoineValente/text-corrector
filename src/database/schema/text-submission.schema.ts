import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FlaggedTokenSchema } from './flagged-token.schema';
import { TextSubmission } from 'src/text-submission/text-submission.entity';

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

  @CreateDateColumn()
  createdAt: Date;
}
