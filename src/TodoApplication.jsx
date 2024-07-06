import { useState } from "react";

function TodoApplication() {

    const items = [
        "Feed the plants",
        "Water the dishes",
        "Clean the cat"
    ];


    const [todos, setTodos] = useState(items);
    return (
        <main>
            {todos.map((todo, index) => (
                <p key={todo}>
                    {todo}
                    <button
                        onClick={() => {
                            setTodos((value) => [
                                ...value.slice(0, index),
                                ...value.slice(index + 1),
                            ])
                        }}
                    >
                        x
                    </button>
                </p>
            ))
            }
        </main >);
}

export default TodoApplication;