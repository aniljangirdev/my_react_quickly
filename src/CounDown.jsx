import { Fragment, useEffect, useLayoutEffect, useState } from "react";

function CounDown() {
  const [count, setCount] = useState(10);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const intervalId = setInterval(() => {
      setCount((value) => {
        if (value <= 1) setRunning(false);
        return value - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [running]);


  return (
    <Fragment>
      <p>Countdown : {count}</p>
      <button
        onClick={() => {
          setCount(10);
        }}
      >
        Reset
      </button>
      <button
        disabled={count === 0}
        onClick={() => {
          setRunning((running) => !running);
        }}
      >
        {running ? "Pause" : "Resume"}
      </button>
    </Fragment>
  );
}

export default CounDown;
