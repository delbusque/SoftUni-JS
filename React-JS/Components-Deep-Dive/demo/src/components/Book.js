import { click } from "@testing-library/user-event/dist/click.js";
import { useState, useEffect } from "react"

export const Book = (props) => {

    const [marked, setMarked] = useState(false);

    useEffect(() => {
        console.log('Mounting');
    }, [])

    useEffect(() => {
        console.log('Updating');
    }, [marked])

    const clickHandler = () => {
        setMarked(oldStyle => !oldStyle);
    }

    let styles = {};

    if (marked) {
        styles.backgroundColor = 'pink';
    }

    return (
        <div onClick={clickHandler} style={styles}>
            <h2>{props.title}</h2>
            <h3>{props.author}</h3>
            <span>{props.year}, </span>
            <span>{props.country}</span>
        </div>
    )
}