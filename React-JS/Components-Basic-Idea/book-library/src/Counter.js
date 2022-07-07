import { useState } from "react";

export const Counter = (props) => {

    const [count, setCount] = useState(props.start || 0);
    const [direction, setDirection] = useState('None');

    const increaseCount = () => {
        setCount(oldCount => oldCount + 1);
        setDirection('Forward');
    }
    const decreaseCount = () => {
        setCount(oldCount => oldCount - 1);
        setDirection('Rewind');
    }
    const clearCount = () => {
        setCount(0);
        setDirection('None');
    }

    let counter = '';

    if (count < 5 && count >= 0) {
        counter = 'Counter';
    } else if (count >= 5 && count < 10) {
        counter = 'Turbo Counter'
    } else if (count >= 10 && count < 15) {
        counter = 'Mega Counter'
    } else {
        counter = 'Hyper Counter'
    }

    return (
        <div>
            <h1 style={{ fontSize: 10 + count + 'px' }}>{counter}</h1>
            <h2 style={{ color: 'pink' }}>{direction}:  {count}</h2>
            <button onClick={decreaseCount}>-</button>
            <button onClick={clearCount}>Clear</button>
            <button onClick={increaseCount}>+</button>

        </div >
    );
}