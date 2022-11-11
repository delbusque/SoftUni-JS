import { useState, useEffect, useContext } from 'react'
import { useNavigate, Link } from "react-router-dom"
import styles from './Auth.module.css'
import { AuthContext } from '../contexts/UserConext.js';

export default function Login() {

    const { setUserHandler } = useContext(AuthContext)

    const [values, setValues] = useState({ email: '', password: '' });

    const inputHandler = (e) => {
        setValues(oldValues => ({ ...oldValues, [e.target.name]: e.target.value }))
    }

    return (

        <form className={styles['auth-form']} onSubmit={(e) => setUserHandler(values, e)}>
            <div className={styles['auth-el']}>
                <input className={styles['auth-inp']} type="email" id="email" name="email" placeholder="Sokka@gm.com"
                    value={values.email} onChange={inputHandler} />
                <input className={styles['auth-inp']} type="password" id="login-password" name="password" placeholder="Password" value={values.password} onChange={inputHandler} />
            </div>

            <button type="submit" className={styles['auth-button']}>Login</button>
            <p className={styles.field}>
                <span>
                    If you don't have a profile click <Link to="/register">here</Link>
                </span>
            </p>
        </form>
    )
}