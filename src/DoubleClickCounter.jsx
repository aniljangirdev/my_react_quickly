import { Fragment, useRef, useState } from "react";

const DoubleClickCounter = () => {
  const [counter, setCounter] = useState(0);

  // const [lastClickTime, setLastClickTime] = useState(null);
  // we can use useRef() hook to avoid re-render components
  const lastClickTime = useRef(null);

  const THRESHOLD = 300;

  const onClicked = () => {
    // first time clicked
    const isDoubleCLiked = Date.now() - lastClickTime.current < THRESHOLD;

    if (isDoubleCLiked) {
      // here do with double cliked operations
      setCounter((currentValue) => currentValue + 1);
    } else {
      // here need to reset time for first click
      lastClickTime.current = Date.now();
    }
  };

  return (
    <Fragment>
      <h2>Counter : {counter}</h2>
      <button onClick={onClicked}>Increment</button>
    </Fragment>
  );
};

export default DoubleClickCounter;
