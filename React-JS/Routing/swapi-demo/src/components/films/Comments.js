import { useState, useEffect } from 'react'

import styles from './Films.module.css'

export const Comments = ({ film, setFilm }) => {

    const [comments, setComments] = useState({ name: '', comment: '' });

    const commentHandler = (e) => {
        e.preventDefault();
        let commentData = { name: e.target.name.value, comment: e.target.comment.value };
        setComments(state => commentData);
    }


    useEffect(() => {
        setFilm(state => ({ ...state, created: comments }));

    }, [comments])

    return (
        <div className={styles['comments-wrap']}>

            <div className={styles['view-comments']}>
                {comments.name == '' && comments.comment == '' ? <h4>
                    LATEST COMMENT: There is still no comment !</h4>
                    : <h4>LATEST COMMENT: {film.created.name} said "{film.created.comment}"</h4>
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