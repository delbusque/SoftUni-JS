import { useState } from 'react';

const Timer = () => {

    const [time, setTime] = useState(0);
    setTimeout(() => {
        // setTime(time + 1);
        setTime(oldTime => oldTime + 1); //prevent race conditions
    }, 1000)

    return (
        <h1>Timer: {time} sec.</h1>
    )
}

export default Timer;