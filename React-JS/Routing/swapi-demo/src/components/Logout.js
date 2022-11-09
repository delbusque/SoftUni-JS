import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserConext.js';
import * as authService from '../services/authService.js'


export default function Logout() {

    const navigate = useNavigate();
    const { user, userLogout } = useContext(UserContext);

    useEffect(() => {
        authService.logout(user.accessToken).then(() => {
            userLogout();
            navigate('/people')
        })
    })

    return null;

}