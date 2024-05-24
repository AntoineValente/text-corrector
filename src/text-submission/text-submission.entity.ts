import { FlaggedToken } from 'src/flagged-token/flagged-token.entity';
import { User } from 'src/user/user.entity';

export class TextSubmission {
  id: number;
  content: string;
  createdAt: Date;
  flaggedTokens?: FlaggedToken[];
  user: User;
}
