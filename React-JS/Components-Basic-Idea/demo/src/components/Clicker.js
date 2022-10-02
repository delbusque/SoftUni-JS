import { useState } from "react";

export const Clicker = () => {

    const [clicks, setClicks] = useState(0);

    const clickHandler = () => {
        setClicks(clicks => clicks + 1);
    }

    const dangerClicks = clicks > 10;

    if (clicks > 15) {
        return <h5>Clicks Finished</h5>
    }

    return (
        <>
            <div>{dangerClicks && <h5>Danger Clicks</h5>}</div>
            <div>
                {!dangerClicks &&
                    <div>
                        {clicks > 5
                            ? <h5>Medium Clicks</h5>
                            : <h5>Normal Clicks</h5>
                        }
                    </div>}
            </div>

            <button onClick={clickHandler}>Click me: {clicks}</button>
        </>
    )
}