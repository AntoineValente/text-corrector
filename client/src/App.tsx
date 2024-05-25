import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { usePostSubmit } from "./submit/usePostSubmit";
import debounce from "lodash.debounce";
import { Review } from "./components/Review";

const DEBOUNCE_TIME_MS = 500;

function App() {
  const [content, setContent] = useState("");
  const {
    mutate: submitContent,
    data: textSubmissionResult,
    reset,
    isLoading,
  } = usePostSubmit();

  const onContentChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.currentTarget.value);

  const debounceSubmitContent = useCallback(
    debounce(submitContent, DEBOUNCE_TIME_MS),
    []
  );

  useEffect(() => {
    if (content) debounceSubmitContent(content);
    else reset();
  }, [content]);

  const flaggedTokens = textSubmissionResult?.payload?.flaggedTokens ?? [];

  return (
    <div className="flex h-screen w-full">
      <div className="h-full flex-grow px-48 py-36 bg-gray-50">
        <textarea
          className="focus:outline-none resize-none text-lg w-full bg-gray-50 h-full"
          placeholder="Write the text you want to correct!"
          value={content}
          onChange={onContentChange}
        />
      </div>
      <div className="w-1/3 max-w-[500px]">
        <Review
          content={content}
          flaggedTokens={flaggedTokens}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default App;
