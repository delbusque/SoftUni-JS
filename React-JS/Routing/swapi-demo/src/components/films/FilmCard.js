import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { pictures } from "../../pictures.js";


export const FilmCard = ({ films }) => {

    const { filmId } = useParams();

    const [film, setFilm] = useState({});
    const [image, setImage] = useState('')

    useEffect(() => {
        films.forEach(film => filmId == film.episode_id && setFilm(film));
        pictures.forEach(pic => pic.episode_id == filmId && setImage(pic.imgUrl));

    }, [])

    return (
        <div className="film-wrap">
            <section className="card-wrap">
                <h1>{film.title}</h1>
                <p>director: {film.director}</p>
                <p>release date: {film.release_date}</p>
            </section>

            <img className='img-wrap' src={image} alt="" />

        </div>
    )
}