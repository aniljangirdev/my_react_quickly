import { useState } from "react";

const Icon = () => {
  <img src="/assets/Unknown.png"></img>;
};

const ButtonTest = () => {
  const [enabled, setEnabled] = useState(false);

  const style = { border: `1px solid ${enabled ? "red" : "black"}` };

  return (
    <button style={style} onClick={() => setEnabled((b) => !b)}>
      <Icon></Icon>Toogle
    </button>
  );
};

export default ButtonTest;
