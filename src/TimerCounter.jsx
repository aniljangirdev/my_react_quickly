import { Fragment, useEffect, useState } from "react";

function StopWatch() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <div>
      <p>Counts: {count}</p>
    </div>
  );
}

function TimerCounter() {
  const [showCounDown, setShowDown] = useState(false);

  return (
    <Fragment>
      <button onClick={() => setShowDown((b) => !b)}>Toogle Timer</button>
      {showCounDown && <StopWatch />}
    </Fragment>
  );
}

export default TimerCounter;
