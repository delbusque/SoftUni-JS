import './Films.modules.css'
import { Link } from "react-router-dom";

export default function Films({ films }) {

    return (
        <ul className='film-ul'>
            {films.map(film =>
                <Link to={`/films/${film.episode_id}`} className='film-link' key={film.episode_id} >
                    {film.title}
                </Link>)
            }
        </ul >
    )
}