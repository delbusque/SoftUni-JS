import { Link } from 'react-router-dom'
import './Navigation.modules.css'
import * as swapiService from '../services/swapiService.js'

export default function Navigation({ api }) {

    return (
        <ul>
            <Link className='nav' to='/'><img className='nav-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/SW_opening_crawl_logo.svg/1200px-SW_opening_crawl_logo.svg.png' /></Link>

            <Link className='nav' to='/fleet'>Fleet</Link>
            <Link className='nav' to='/about'>About</Link>
            <Link className='nav' to='/contacts'>Contacts</Link>
        </ul>

    )
}