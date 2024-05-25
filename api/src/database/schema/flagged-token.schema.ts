import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TextSubmissionSchema } from './text-submission.schema';
import {
  FlaggedToken,
  FlaggedTokenKind,
} from 'src/flagged-token/flagged-token.entity';

@Entity('flagged_token')
export class FlaggedTokenSchema implements FlaggedToken {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => TextSubmissionSchema,
    (textSubmission) => textSubmission.flaggedTokens,
  )
  textSubmission: TextSubmissionSchema;

  @Column('int')
  startIndex: number;

  @Column('int')
  endIndex: number;

  @Column()
  suggestion: string;

  @Column()
  reason: string;

  @Column({
    type: 'enum',
    enum: FlaggedTokenKind,
  })
  kind: FlaggedTokenKind;
}
