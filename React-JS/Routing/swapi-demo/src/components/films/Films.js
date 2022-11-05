import styles from './Films.module.css'

import { Link } from "react-router-dom";

export default function Films({ films }) {



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