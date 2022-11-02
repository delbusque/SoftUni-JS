import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';

import * as swapiService from './services/swapiService.js'

import Navigation from './components/Navigation.js';
import Home from './components/Home.js';
import Fleet from './components/Fleet.js';
import About from './components/About.js';
import Contacts from './components/Contacts.js';


function App() {

  const [api, setApi] = useState({});

  useEffect(() => {
    swapiService.api().then(data => setApi(data));
  }, [])

  console.log(api);
  return (
    <div className="App">
      <header className="App-header">

        <Navigation api={api} />

        <Routes>
          <Route path='/' element=<Home /> />
          <Route path='/fleet' element=<Fleet /> />
          <Route path='/about' element=<About /> />
          <Route path='/contacts' element=<Contacts /> />

          <Route path='/fleet/:starship' element=<Fleet /> />
        </Routes>


      </header>
    </div>
  );
}

export default App;
