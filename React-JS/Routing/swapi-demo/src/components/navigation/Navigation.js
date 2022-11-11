import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom'
import './Navigation.modules.css'
import uniqid from 'uniqid';

import { AuthContext } from '../../contexts/UserConext.js';


export default function Navigation({ api }) {

    const { user } = useContext(AuthContext);

    const apis = Object.keys(api);

    return (
        <ul className='nav-wrapper'>
            <Link className='nav' to='/'><img className='nav-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/SW_opening_crawl_logo.svg/1200px-SW_opening_crawl_logo.svg.png' alt='home' /></Link>

            <NavLink key={uniqid()} className='nav' to={`/films`}
                style={({ isActive }) => ({ background: isActive ? '#e3c318' : undefined })}>Films</NavLink>
            <NavLink key={uniqid()} className='nav' to={`/planets`}
                style={({ isActive }) => ({ background: isActive ? 'aquamarine' : undefined })}>Planets</NavLink>
            <NavLink key={uniqid()} className='nav' to={`/people`}
                style={({ isActive }) => ({ background: isActive ? 'palegoldenrod' : undefined })}>People</NavLink>
            <NavLink key={uniqid()} className='nav' to={`/starships`}
                style={({ isActive }) => ({ background: isActive ? 'lightgrey' : undefined })}>Starships</NavLink>

            {!user.email && (
                <div className='nav-auth'>
                    <NavLink style={({ isActive }) => ({ background: isActive ? 'antiquewhite' : undefined })} className='auth' to='/login'>Login</NavLink>
                    <NavLink style={({ isActive }) => ({ background: isActive ? 'antiquewhite' : undefined })} className='auth' to='/register'>Register</NavLink>
                </div>
            )}

            {user.email && (
                <div className='nav-auth'>
                    <div className='nav-user' to='/login'>{user.email}</div>
                    <NavLink style={({ isActive }) => ({ background: isActive ? 'antiquewhite' : undefined })} className='auth' to='/logout'>Logout</NavLink>
                </div>
            )}

        </ul>

    )
}