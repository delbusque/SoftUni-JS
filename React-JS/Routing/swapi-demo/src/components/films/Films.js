import styles from './Films.module.css'

import { Link } from "react-router-dom";
import { useContext } from 'react';
import { FilmsContext } from '../../contexts/FilmContext.js';


export default function Films() {

    const films = useContext(FilmsContext);

    return (
        <ul className={styles['film-ul']}>
            {films.map(film =>
                <Link to={`/films/${film.episode_id}`} className={styles['film-link']} key={film.episode_id} >
                    {film.title}
                </Link>)
            }
        </ul >
    )
}