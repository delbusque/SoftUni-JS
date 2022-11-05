import { useParams, useNavigate, Link, Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react'
import { pictures } from "../../pictures.js";

import styles from './Films.module.css'
import { Comments } from "./Comments.js";

export const FilmCard = ({ films, setFilms }) => {

    const { filmId } = useParams();

    const [showComments, setShowComments] = useState(false);

    const [film, setFilm] = useState({});
    const [image, setImage] = useState('')

    useEffect(() => {
        films.forEach(film => filmId == film.episode_id && setFilm(film));
        pictures.forEach(pic => pic.episode_id == filmId && setImage(pic.imgUrl));
    }, [filmId, films])

    const viewComments = () => {
        setShowComments(state => !state);
    }

    return (
        <div>
            <div className={styles['film-wrap']}>
                <section className={styles['card-wrap']}>
                    <h1>{film.title}</h1>
                    <p>director: {film.director}</p>
                    <p>release date: {film.release_date}</p>
                </section>

                <img className={styles['img-wrap']} src={image} alt="" />
            </div>

            <Link to={`/films/${filmId}/comments`} className={styles['comments-link']}
                onClick={viewComments}>{!showComments ? 'View comments' : 'Hide comments'}</Link>

            {showComments &&
                <Routes>
                    <Route path={`comments`} element=<Comments
                        film={film} setFilm={setFilm} films={films} setFilms={setFilms} /> />
                </Routes>}

        </div>
    )
}