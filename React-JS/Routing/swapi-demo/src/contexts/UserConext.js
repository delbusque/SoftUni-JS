import { createContext } from "react";
import { useNavigate } from 'react-router-dom';
import { useLocaleStorage } from '../hooks/useLocalStorage.js'
import * as authService from '../services/authService.js'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();

    const [user, setUser] = useLocaleStorage('auth', {});

    const setUserHandler = async (values, e) => {
        e.preventDefault();
        const result = await authService.login(values);
        if (result.email) {
            setUser(result)

            return navigate('/')
        } else {
            return navigate('/starships')
        }
    };

    const userLogout = () => {
        setUser({});
    }

    return (
        <AuthContext.Provider value={{ setUserHandler, user, userLogout }}>
            {children}
        </AuthContext.Provider>
    )
}