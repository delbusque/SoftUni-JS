import { Routes, Route, Link, Navigate, NavLink } from 'react-router-dom';

import About from './components/About';
import Contacts from './components/Contacts';
import Premium from './components/Premium';
import Planet from './components/Planet';
import PlanetList from './components/PlanetList';
import CurrentPlanet from './components/CurrentPlanet';

import './App.css';

import styles from './components/About.module.css'

function App() {

  const styleHandler = ({ isActive }) => {
    return isActive ? styles['nav-link'] : styles['non-link']
  }

  return (

    <div className="App">

      <nav >
        <div className='nav'>
          <NavLink to='/'

            style={(navLinkProps) => navLinkProps.isActive ? { backgroundColor: 'grey' } : { textDecoration: 'none' }}
          >Home</NavLink>
        </div>

        <div className='nav'><NavLink to='contacts' className={styleHandler}>Contacts</NavLink></div>
        <div className='nav'><Link to='about' className={styles['about']}>About</Link></div>
        <div className='nav'><NavLink to='planets/1' className={styleHandler}>Planets</NavLink></div>
        <div className='nav'><Link to='yavin'>Yavin</Link></div>
        <div className='nav'><NavLink to='planets' className={styleHandler}>Planets List</NavLink></div>
      </nav>
      <main className={styles.main}>
        <Routes>
          <Route path='/' element={<h3>Sweet Home</h3>} />
          <Route path='about' element={<About />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='*' element={<Premium />} />

          <Route path='planets/:planetId' element={<Planet />} />
          <Route path='yavin' element={<Navigate to='/planets/3' replace />} />

          <Route path='planets/*' element={<PlanetList />} />

        </Routes>
      </main>
      <div>
        <footer>All rights reserved 2022</footer>
      </div>

    </div>

  )
}

export default App;
