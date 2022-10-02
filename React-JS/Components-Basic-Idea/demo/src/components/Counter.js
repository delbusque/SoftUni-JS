import { useState } from "react";

export const Counter = (props) => {

    const [count, setCount] = useState(props.start);
    const [action, setAction] = useState('None');

    const decreaseHandler = () => {
        setAction(oldAction => 'Minus');
        setCount(oldCount => oldCount - 1);
    }
    const increaseHandler = () => {
        setAction(() => 'Plus');
        setCount(oldCount => oldCount + 1);
    }
    const clearHandler = () => {
        setAction(oldAction => oldAction = 'Reset');
        setCount(0);
    }

    return (
        <div>
            <div>{count}</div>

            <button onClick={decreaseHandler}>-</button>
            <button onClick={clearHandler}>Clear</button>
            <button onClick={increaseHandler}>+</button>

            <div>{action}</div>

        </div>
    )
}