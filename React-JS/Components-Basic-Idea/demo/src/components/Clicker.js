import { useState } from "react";

export const Clicker = () => {

    const [clicks, setClicks] = useState(0);

    const clickHandler = () => {
        setClicks(clicks => clicks + 1);
    }

    const dangerClicks = clicks > 15;

    return (
        <>
            <div>{dangerClicks && <h2>Danger Clicks</h2>}</div>
            <div>
                {!dangerClicks &&
                    <div>
                        {clicks > 5
                            ? <h2>Medium Clicks</h2>
                            : <h2>Normal Clicks</h2>
                        }
                    </div>}
            </div>

            <button onClick={clickHandler}>Click me: {clicks}</button>
        </>
    )
}