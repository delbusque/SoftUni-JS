import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserConext.js';
import * as authService from '../services/authService.js'


export default function Logout() {

    const navigate = useNavigate();
    const { user, userLogout } = useContext(AuthContext);

    useEffect(() => {
        authService.logout(user.accessToken).then(() => {
            userLogout();
            navigate('/people')
        })
    })

    return null;

}