import axios from "axios";
import { TextSubmission } from "../types/TextSubmission";
import { Result } from "../types/Result";

export const submitApi = {
  postSubmit: (content: string): Promise<Result<TextSubmission>> =>
    axios.post("/submit", { content }),
};
