import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Counter from "./Counter";
import Accordtion from "./Accordtion";
import Calculator from "./Calculator";
import TodoApplication from "./TodoApplication";
import Counter1 from "./Counter1";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    {/* <Accordtion></Accordtion> */}
    {/* <Calculator a={20} b={10}></Calculator> */}
    {/* <Counter start={0}></Counter> */}
    {/* <Counter1></Counter1> */}
    {/* <TodoApplication ></TodoApplication> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
