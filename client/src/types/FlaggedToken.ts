import { TextSubmission } from "./TextSubmission";

export enum FlaggedTokenKind {
  CONJUGATION = "CONJUGATION",
  SPELLING = "SPELLING",
  GRAMMAR = "GRAMMAR",
  PUNCTUATION = "PUNCTUATION",
  WORD_CHOICE = "WORD_CHOICE",
  SYNTAX = "SYNTAX",
}

export type FlaggedToken = {
  id: number;
  textSubmission: TextSubmission;
  startIndex: number;
  endIndex: number;
  suggestion: string;
  reason: string;
  kind: FlaggedTokenKind;
};
