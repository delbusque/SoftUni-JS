import { useState } from "react";

export const Clicker = (props) => {

    const [clicks, makeClick] = useState(0);

    const clickHandler = (e) => {

        // makeClick(clicks + 1); 
        makeClick(oldClicks => oldClicks + 1); // function syntax for race conditions
    }

    return (
        <div>
            <button onClick={clickHandler}>
                Click me: {clicks}
            </button>
        </div>
    );
}