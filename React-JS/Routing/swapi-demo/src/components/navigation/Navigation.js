import { Link } from 'react-router-dom'
import './Navigation.modules.css'
import { NavLin } from './NavLin.js'

export default function Navigation({ api }) {
    const apis = Object.keys(api);
    return (
        <ul className='nav-wrapper'>
            <Link className='nav' to='/'><img className='nav-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/SW_opening_crawl_logo.svg/1200px-SW_opening_crawl_logo.svg.png' /></Link>

            {apis.map(a => <NavLin api={a} key={a} className='nav' to={`/${a}`}>{a}</NavLin>)}
        </ul>

    )
}