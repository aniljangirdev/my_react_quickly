import { Fragment, useState } from "react";

function Counter({ start }) {

    const [counter, setCounter] = useState(start);
    const [isMenuVisible, setMenuVisible] = useState(false);
    const [emailAddress, setEmailAddress] = useState("");
    const [data, setData] = useState(null);
    const [password, setPassword] = useState('');
    const [operation, setOperation] = useState(() => OPERATION.ADDITION);
    // const [value, set] = useState(0);

    return (
        <Fragment>
            <p>Clicks: {counter}</p>
            <button onClick={() => setCounter(value => value + 1)}>Increment</button>
            <button onClick={() => setCounter(0)}>Reset</button>
        </Fragment>
    );
}

const OPERATION = {
    ADDITION: (a, b) => a + b,
    SUBSTRACTION: (a, b) => a - b,
    MULTI: (a, b) => a + b
}




export default Counter;