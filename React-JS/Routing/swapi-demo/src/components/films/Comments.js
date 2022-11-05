import { useState, useEffect } from 'react'

import styles from './Films.module.css'

export const Comments = ({ film, setFilm, films, setFilms }) => {

    const [comments, setComments] = useState([]);

    const commentHandler = (e) => {
        e.preventDefault();
        let commentData = { name: e.target.name.value, comment: e.target.comment.value };
        setComments(state => [...state, commentData]);
    }


    useEffect(() => {
        setFilm(state => ({ ...state, created: comments }));

    }, [comments])




    return (
        <div className={styles['comments-wrap']}>

            <div className={styles['view-comments']}>
                {comments.length < 1 ? <h4>
                    There are still no comments !</h4>
                    : film.created.map(c => <h4>{c.name}: {c.comment}</h4>)
                }

            </div>

            <form className={styles['add-comments']} onSubmit={commentHandler}>
                <input className={styles['input']} placeholder="John Doe"
                    name='name' />
                <input className={styles['input']} placeholder="Add comment"
                    name='comment' />
                <button className={styles['comment-button']}>Add comment</button>
            </form>
        </div>
    )
}