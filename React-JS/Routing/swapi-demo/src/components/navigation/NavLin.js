import { NavLink } from 'react-router-dom'

export const NavLin = ({ api }) => {

    return (
        <NavLink
            style={({ isActive }) => ({ background: isActive ? 'antiquewhite' : undefined })}

            to={`/${api}`} className='nav'
        >
            {api.toUpperCase()}
        </NavLink>
    )
}