import { useState, useEffect } from 'react';

export const Book = (props) => {

    const [highlighted, setHighlighted] = useState(false);
    const [marker, setMarker] = useState(false);

    const clickHandler = (e) => {
        setHighlighted(state => !state);
    };
    const markerHandler = () => {
        setMarker(true)
    }

    useEffect(() => {
        console.log('Mounting ' + props.title);
    }, []);

    useEffect(() => {
        console.log('Updating ' + props.title);
    }, [highlighted, marker]);


    const style = {};
    if (highlighted) {
        style.backgroundColor = 'brown';
    }
    if (marker) {
        style.backgroundColor = 'yellow';
    }

    return (
        <li style={style}>
            <h3>{props.title}</h3>
            <h5>{props.author}</h5>
            <p>Year: {props.year}, Country: {props.country}</p>
            <p>{props.link}</p>
            <button onClick={clickHandler}>Highlight</button>
            <button onClick={markerHandler}>Delete</button>
        </li>
    )
}