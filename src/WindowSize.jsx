import { Fragment, useEffect, useState } from "react";

const getWindowSize = () => {
  return `${window.innerWidth}X${window.innerHeight}`;
};

function WindowSize() {
  const [size, setSize] = useState(getWindowSize());

  useEffect(() => {
    const onResize = () => setSize(getWindowSize());

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [size]);

  return <h1>Window size: {size}</h1>;
}

export default WindowSize;
