import { useState } from "react";

const useInput = () => {
  // state
  const [value, setValue] = useState("");

  // handler
  const handler = (event) => {
    setValue(event.target.value);
  };

  // reset
  const reset = () => {
    setValue("");
  };

  // return
  return [value, handler, reset];
};

export default useInput;
