import { Fragment, useState } from "react";

const Die = () => {
  const style = {
    border: "2px solid black",
    display: "inline-block",
    width: "2em",
    height: "2em",
    textAlign: "center",
    lineHeight: 2,
  };

  const value = Math.floor(6 * Math.random());

  return <span style={style}>{value}</span>;
};

function DieRoller() {
  const [rolls, setRolls] = useState(1);
  const [left, setLeft] = useState(1);

  const style = {
    backgroundColor: left < 100 ? "blue" : "yellow",
    width: "200px",
  };

  const onMouseMove = (evt) => {
    setLeft(evt.nativeEvent.offsetX);
  };

  return (
    <main style={style} onMouseMove={onMouseMove}>
      <h1>Rolls: {rolls}</h1>
      <button
        onClick={() => {
          setRolls((v) => v + 1);
        }}
      >
        Re-roll
      </button>
      <div>
        <Die></Die>
        <Die></Die>
        <Die></Die>
      </div>
    </main>
  );
}

export default DieRoller;
