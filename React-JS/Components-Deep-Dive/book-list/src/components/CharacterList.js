import { useEffect, useState } from 'react';
import styles from './Characters.module.css'

export const CharatcterList = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/people').then(data => data.json())
            .then(res => setCharacters(res.results));
    }, [])

    return (
        <div >
            <ul className={styles.swapi}>
                {!characters.length && <div>Loading...</div>}
                {characters.map(ch => <li key={ch.name}>{ch.name}</li>)}
            </ul>
        </div>
    )
}