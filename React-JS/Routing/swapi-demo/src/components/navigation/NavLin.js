import { Link } from 'react-router-dom'

export const NavLin = ({ api }) => {

    return (
        <Link className='nav' to={`/${api}`}>{api.toUpperCase()}</Link>
    )
}