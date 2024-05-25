import { FlaggedToken } from "./FlaggedToken";
import { User } from "./User";

export type TextSubmission = {
  id: number;
  content: string;
  createdAt: Date;
  flaggedTokens: FlaggedToken[];
  user: User;
};
