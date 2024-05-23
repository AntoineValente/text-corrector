import {
  FlaggedToken,
  FlaggedTokenKind,
} from 'src/submission/flagged-token/flagged-token.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('flagged_token')
export class FlaggedTokenSchema implements FlaggedToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  offset: number;

  @Column('int')
  length: number;

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
