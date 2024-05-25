import { useMutation } from "react-query";
import { submitApi } from "./submitApi";
import { TextSubmission } from "../types/TextSubmission";
import { Result } from "../types/Result";

export function usePostSubmit() {
  return useMutation<Result<TextSubmission>, Error, string>(
    submitApi.postSubmit
  );
}
