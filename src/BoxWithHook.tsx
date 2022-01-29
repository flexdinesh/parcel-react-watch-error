import * as React from "react";

export const BoxWithHook = () => {
  const greetings = React.useMemo(() => {
    return "Hello World, Memo!";
  }, [])
  return <div>{greetings}</div>;
};
