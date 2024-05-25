import { useState } from "react";
import { usePostSubmit } from "./submit/usePostSubmit";
import { useCookies } from "react-cookie";

function App() {
  const [cookies] = useCookies(["access_token"]);

  const [content, setContent] = useState("");
  const { mutate, data } = usePostSubmit();

  const onSubmit = () => {
    if (!content) return;

    mutate(content);
  };

  const onSigninGoogle = () => {
    window.open(import.meta.env.VITE_GOOGLE_LOGIN_URL, "_self");
  };

  return (
    // <div style={{ display: "flex", flexDirection: "column" }}>
    //   <div>
    //     <input value={content} onChange={(e) => setContent(e.target.value)} />

    //     <button onClick={onSubmit}>Send</button>
    //   </div>

    //   <pre>{JSON.stringify(data, null, 2)}</pre>

    //   {!cookies.access_token && (
    //     <button onClick={onSigninGoogle}>Sign in with google</button>
    //   )}
    // </div>
    <div className="h-screen flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      Copy
      <div className="w-full max-w-screen-md"></div>
    </div>
  );
}

export default App;
