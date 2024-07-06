import { Fragment, useState } from "react";

function Counter3() {
  const [count, setCount] = useState(0);

  const onChange = (event) => {
    const selectedVal = parseInt(event.target.value);
    setCount((val) => val + selectedVal);
  };

  const values = [1, 2, 3, 4, 5];

  return (
    <Fragment>
      <h1>Counter: {count}</h1>
      <select onChange={onChange}>
        {values.map((val) => (
          <option key={val}>{val}</option>
        ))}
      </select>
    </Fragment>
  );
}

export default Counter3;
