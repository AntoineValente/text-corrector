import { TextSubmission } from 'src/text-submission/text-submission.entity';

export enum FlaggedTokenKind {
  CONJUGATION = 'CONJUGATION',
  SPELLING = 'SPELLING',
  GRAMMAR = 'GRAMMAR',
  PUNCTUATION = 'PUNCTUATION',
  WORD_CHOICE = 'WORD_CHOICE',
  SYNTAX = 'SYNTAX',
}

export class FlaggedToken {
  id: number;
  textSubmission: TextSubmission;
  startIndex: number;
  endIndex: number;
  suggestion: string;
  reason: string;
  kind: FlaggedTokenKind;
}
