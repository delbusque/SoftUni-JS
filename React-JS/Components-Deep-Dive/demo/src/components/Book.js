import { useState, useEffect } from "react"
import styles from './Book.module.css'

export const Book = (props) => {

    const [marked, setMarked] = useState(false);
    const [doubled, setDoubled] = useState(false);

    useEffect(() => {
        console.log('Mounting - ' + props.title);
    }, [])

    useEffect(() => {
        console.log('Updating');
    }, [marked, props.title, marked, doubled])

    const clickHandler = () => {
        setMarked(oldStyle => !oldStyle);
    }

    const doubleClickHandler = () => {
        setDoubled(oldStyle => !oldStyle);
    }

    let style = {};

    if (marked) {
        style.backgroundColor = 'pink';
    }
    if (doubled) {
        style.backgroundColor = 'orange';
    }

    return (
        <div onClick={clickHandler} onDoubleClick={doubleClickHandler} style={style}
            className={`${styles['book-background']} ${styles['book-font']}`}>
            <h2>{props.title}</h2>
            <h3>{props.author}</h3>
            <span>{props.year}, </span>
            <span>{props.country}</span>
        </div>
    )
}