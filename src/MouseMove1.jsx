import { useEffect, useState } from "react";

function MouseMove1() {
  const [isMoving, setMoving] = useState(false);

  useEffect(() => {
    if (!isMoving) return;

    console.log("Moving: useEffect)_");

    const timeout = setTimeout(() => {
      setMoving(false);
      console.log("Moving: useEffect: timeout over: 500");
    }, 500);

    return clearTimeout(timeout);
  }, [isMoving]);

  const mousemove = () => {
    setMoving(true);
    console.log("Moving: mouse Move true");
  };

  return (
    <section onMouseMove={mousemove}>
      <h2>
        The mouse is {!isMoving && "not"} moving: {isMoving ? "✓" : "✗"}
      </h2>
    </section>
  );
}

export default MouseMove1;
