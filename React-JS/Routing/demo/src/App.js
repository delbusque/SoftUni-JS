import { Routes, Route, Link, Navigate, NavLink } from 'react-router-dom';

import About from './components/About';
import Contacts from './components/Contacts';
import Premium from './components/Premium';
import Planet from './components/Planet';

import './App.css';

import styles from './components/About.module.css'

function App() {

  const styleHandler = ({ isActive }) => {
    return isActive ? styles['nav-link'] : undefined
  }
  return (

    <div className="App">

      <nav>
        <div>
          <NavLink to='/' style={(navLinkProps) => navLinkProps.isActive ? { backgroundColor: 'grey' } : undefined}
          >Home</NavLink>
        </div>

        <div><NavLink to='contacts' className={styleHandler}>Contacts</NavLink></div>
        <div><Link to='about' className={styles['about']}>About</Link></div>
        <div><NavLink to='planets/1' className={styleHandler}>Planets</NavLink></div>
        <div><Link to='yavin'>Yavin</Link></div>
      </nav>
      <main className={styles.main}>
        <Routes>
          <Route path='/' element={<h3>Sweet Home</h3>} />
          <Route path='about' element={<About />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='*' element={<Premium />} />

          <Route path='planets/:planetId' element={<Planet />} />
          <Route path='yavin' element={<Navigate to='/planets/3' replace />} />

        </Routes>
      </main>
      <div>
        <footer>All rights reserved 2022</footer>
      </div>

    </div>

  )
}

export default App;
