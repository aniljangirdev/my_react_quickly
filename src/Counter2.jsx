import { useRef, useState } from "react";

function Counter2() {
  const [count, setCount] = useState(0);
  const refIcrement = useRef();

  const buttonStyle = {
    color: "blue",
    border: "1px solid",
    background: "transparent",
    borderRadius: ".25em",
    padding: ".5em 1em",
    margin: ".5em",
  };

  const onClicked = (event) => {
    const detla = event.target === refIcrement.current ? 1 : -1;
    setCount((c) => c + detla);
  };

  return (
    <div>
      <p>Counter: {count}</p>
      <button style={buttonStyle} ref={refIcrement} onClick={onClicked}>
        Increment
      </button>
      <button style={buttonStyle} onClick={onClicked}>
        Decrement
      </button>
    </div>
  );
}

export default Counter2;
