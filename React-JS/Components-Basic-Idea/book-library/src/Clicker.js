import { useState } from "react";

export const Clicker = (props) => {

    const [clicks, makeClick] = useState(0);

    const clickHandler = (e) => {

        // makeClick(clicks + 1); 
        makeClick(oldClicks => oldClicks + 1); // function syntax for race conditions
    }

    const dangerClicks = clicks > 15;

    if (clicks > 19) {
        return <h1>End of Clicks</h1>
    }

    return (
        <div>
            {dangerClicks && <h1>Danger Clicks</h1>}
            <div>{clicks > 6
                ? <h2>Medium Clicks</h2>
                : <h4>Normal Clicks</h4>}
            </div>
            <button onClick={clickHandler}>Click me: {clicks}</button>
        </div>
    );
}