import { TextSubmission } from 'src/submission/text-submission/text-submission.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('text_submission')
export class TextSubmissionSchema implements TextSubmission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @CreateDateColumn()
  createdAt: Date;
}
