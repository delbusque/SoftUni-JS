import { useState, useEffect } from 'react';
import styles from './Book.module.css';

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
        <div style={style} className={styles['book-item']}>
            <h3 className={styles['title-item']}>{props.title}</h3>
            <h5 className={`${styles.author} ${styles['space-item']}`}>{props.author}</h5>
            <p>Year: {props.year}, Country: {props.country}</p>
            <p>{props.link}</p>
            <button onClick={clickHandler}>Highlight</button>
            <button onClick={markerHandler} className={styles['space-item']}>Delete</button>
        </div>
    )
}