import { TextSubmission } from "./TextSubmission";

export type User = {
  id: string;
  name: string;
  email: string;
  textSubmissions?: TextSubmission[];
};
