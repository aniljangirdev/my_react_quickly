import { Fragment, useEffect, useRef } from "react";

function AutoFocusInput() {
  const ref = useRef();
  useEffect(() => ref.current.focus(), []);
  return <input ref={ref} />;
}

export default AutoFocusInput;
