import { useState } from "react";

export const Clicker = () => {

    const [clicks, setClicks] = useState(0);

    const clickHandler = () => {
        setClicks(clicks => clicks + 1);
    }

    return (
        <button onClick={clickHandler}>Click me: {clicks}</button>
    )
}