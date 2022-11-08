import styles from './Auth.module.css'

export default function Register() {

    return (

        <form className={styles['auth-form']}>
            <div className={styles['auth-el']}>
                <input className={styles['auth-inp']} type="email" id="email" name="email" placeholder="sokka@gmail.com" />
                <input className={styles['auth-inp']} type="password" id="login-password" name="password" placeholder="password" />
                <input className={styles['auth-inp']} type="password" id="repeat-password" name="repeatPassword" placeholder="repeat password" />
            </div>

            <button type="submit" className={styles['auth-button']}>Register</button>
            <p className={styles.field}>
                <span>
                    If you have a profile click <a href="/register">here</a>
                </span>
            </p>
        </form>
    )
}
