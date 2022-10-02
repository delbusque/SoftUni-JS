import { useState } from 'react';

const Timer = () => {

    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    setTimeout(() => {
        // setTime(time + 1);
        setSec(oldSec => oldSec + 1); //prevent race conditions
    }, 1000)

    function clock() {
        if (sec < 5) {
            return `Timer: ${sec} sec.`;
        } else {
            return `Timer: ${min} min. ${sec} sec.`
        }

    }

    return (
        //<h1>Timer: {sec > 4 ? `${min} min. : ${sec}` : sec} sec.</h1>
        <div>Timer: {sec > 4
            ? <h2>{min} min. : {sec} sec.</h2>
            : <h3>{sec} sec.</h3>
        }
        </div>
        //<h1>{clock()}</h1>
    )
}

export default Timer;