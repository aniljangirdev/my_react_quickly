import { useState } from "react";

const OPERATION = {
    ADDITION: (a, b) => a + b,
    SUBSTRACTION: (a, b) => a - b,
    MULTI: (a, b) => a + b
}

function Calculator({ a, b }) {
    const [operator, setOperator] = useState(() => OPERATION.ADDITION);
    return (
        <main>
            <h1>Calculator</h1>
            <button onClick={() => setOperator(() => OPERATION.ADDITION)}>Addition</button>
            <button onClick={() => setOperator(() => OPERATION.SUBSTRACTION)}>Substration</button>
            <button onClick={() => setOperator(() => OPERATION.MULTI)}>Multiplication</button>
            <p>result of apply operation to {a} and {b} is: </p>
            {
                operator(a, b)
            }
        </main>
    )
}

export default Calculator;