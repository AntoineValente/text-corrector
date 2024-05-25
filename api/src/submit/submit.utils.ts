import { FlaggedTokenKind } from 'src/flagged-token/flagged-token.entity';
import { SubmitResult } from './submit.types';
import { ObjectSchema, array, mixed, number, object, string } from 'yup';

const submissionResultSchema: ObjectSchema<SubmitResult> = object({
  startIndex: number(),
  endIndex: number(),
  suggestion: string(),
  reason: string(),
  kind: mixed<FlaggedTokenKind>().oneOf(Object.values(FlaggedTokenKind)),
});

export const parseSubmissionResult = (stringResult: string) => {
  try {
    const jsonResult = JSON.parse(stringResult);
    const parsedResult = array(submissionResultSchema).validateSync(jsonResult);

    return parsedResult;
  } catch (err) {
    return null;
  }
};
