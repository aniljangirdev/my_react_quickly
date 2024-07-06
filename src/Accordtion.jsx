import { Fragment, useState } from "react";
import Counter from "./Counter";

function Accordtion() {

    const [isExpanded, setExpanded] = useState(false);

    return (
        <main>
            <h2 style={{ display: "flex", gap: "6px" }}>
                Secret Password
                <button onClick={() => setExpanded(false)}>-</button>
                <button onClick={() => setExpanded(true)}>+</button>
            </h2>
            {isExpanded && (<p>Password: <code>hunder123</code><div className=""></div></p>)}
        </main>
    )
};

export default Accordtion;