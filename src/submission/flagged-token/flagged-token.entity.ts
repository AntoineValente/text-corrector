export enum FlaggedTokenKind {
  CONJUGATION = 'CONJUGATION',
  NUMBER = 'NUMBER',
  GENDER_AGREEMENT = 'GENDER_AGREEMENT',
  SPELLING = 'SPELLING',
  PUNCTUATION = 'PUNCTUATION',
  WORD_CHOICE = 'WORD_CHOICE',
  SYNTAX = 'SYNTAX',
}

export class FlaggedToken {
  id: number;
  offset: number;
  length: number;
  suggestion: string;
  reason: string;
  kind: FlaggedTokenKind;
}
