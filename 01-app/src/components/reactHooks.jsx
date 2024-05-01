import React, {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("EvenOdd-Game");

    console.log(count, value);

    return (
        <div>
            <h6>Value component - {value}</h6>
            <p>Count component -  {count}</p>
            <p>Number is-  {count%2==0?"Even": "Odd"}</p>

            <button onClick={() => setValue("EvenOdd-Game")}>EvenOdd-Game</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <h1>Counter</h1>
        </div>
    )
}

export default Counter;