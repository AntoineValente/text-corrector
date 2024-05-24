import { TextSubmission } from 'src/text-submission/text-submission.entity';

export class User {
  id: string;
  name: string;
  email: string;
  textSubmissions?: TextSubmission[];
}
