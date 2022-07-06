import { useState } from 'react';

export const Timer = (props) => {

    const [sec, setSec] = useState(props.start);
    const [minut, setMinut] = useState(0);

    setTimeout(() => {
        if (sec < 49) {
            setSec(sec + 1);
        }
    }, 1000)

    return (
        <div>
            <h2>Timer: {minut} minutes {sec} seconds</h2>
        </div>
    )
}