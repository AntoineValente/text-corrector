import { FC } from "react";
import { FlaggedToken, FlaggedTokenKind } from "../types/FlaggedToken";
import { Spinner } from "./Spinner";

const errorStyles: Record<FlaggedTokenKind, { color: string; label: string }> =
  {
    CONJUGATION: {
      color: "rgb(0, 102, 255)",
      label: "Conjugation",
    },
    SPELLING: {
      color: "rgb(0, 204, 102)",
      label: "Spelling",
    },
    GRAMMAR: {
      color: "rgb(153, 51, 255)",
      label: "Grammar",
    },
    PUNCTUATION: {
      color: "rgb(255, 153, 0)",
      label: "Punctuation",
    },
    WORD_CHOICE: {
      color: "rgb(255, 51, 51)",
      label: "Word choice",
    },
    SYNTAX: {
      color: "rgb(153, 102, 51)",
      label: "Syntax",
    },
  };

type Props = {
  isLoading: boolean;
  flaggedTokens: FlaggedToken[];
  content: string;
};

export const Review: FC<Props> = ({ isLoading, flaggedTokens, content }) => (
  <div className="flex h-full flex-col space-y-6 shadow-xl px-6 pt-12 overflow-y-auto">
    <div className="flex space-x-1 items-center">
      <b className="text-xl">Review </b>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex justify-center items-center text-sm text-white w-5 h-5 rounded-full bg-slate-600">
          {flaggedTokens.length}
        </div>
      )}
    </div>

    <div className="flex flex-col space-y-4">
      {flaggedTokens.map((flaggedToken) => (
        <div className="w-full bg-gray-50 flex flex-col p-4 rounded-lg shadow-md">
          <div className="flex space-x-2 items-center">
            <div
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: errorStyles[flaggedToken.kind].color,
              }}
            />

            <span className="text-base">
              {errorStyles[flaggedToken.kind].label}
            </span>
          </div>
          <div className="flex space-x-1">
            <s className="text-sm text-gray-500">
              {content.substring(
                flaggedToken.startIndex,
                flaggedToken.endIndex
              )}
            </s>
            <b className="text-sm">{flaggedToken.suggestion}</b>
          </div>

          <p className="text-xs text-gray-400 mt-1">{flaggedToken.reason}</p>
        </div>
      ))}
    </div>
  </div>
);
