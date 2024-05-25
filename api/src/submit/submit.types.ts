import { FlaggedToken } from 'src/flagged-token/flagged-token.entity';

export type SubmitResult = Omit<FlaggedToken, 'id' | 'textSubmission'>;
