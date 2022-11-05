import styles from './Films.module.css'

export const Comments = () => {
    return (
        <div className={styles['comments-wrap']}>

            <div className={styles['view-comments']}>
                <h4>
                    There are still no comments !
                </h4>
            </div>

            <form className={styles['add-comments']}>

                <input className={styles['input']} placeholder="John Doe" />

                <input className={styles['input']} placeholder="Add comment" />

                <button type="submit" className={styles['comment-button']}>Add comment</button>

            </form>
        </div>
    )
}