import { FlaggedToken } from 'src/flagged-token/flagged-token.entity';

export class TextSubmission {
  id: number;
  content: string;
  createdAt: Date;
  flaggedTokens?: FlaggedToken[];
}
