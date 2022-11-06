import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';

import { FilmsContext } from './components/films/FilmContext.js';

import * as swapiService from './services/swapiService.js'

import Navigation from './components/navigation/Navigation.js';
import Home from './components/Home.js';
import Films from './components/films/Films.js';
import People from './components/People.js';
import Planets from './components/Planets.js';
import Species from './components/Species.js';
import Vehicles from './components/Vehicles.js';
import Starships from './components/Starships.js';
import { FilmCard } from './components/films/FilmCard.js';

import { useFetch } from './components/hooks/useFetch.js'

const baseUrl = 'https://swapi.py4e.com/api/films';

function App() {

  const [api, setApi] = useState({});
  useEffect(() => {
    swapiService.getApi().then(data => setApi(data));
  }, [])

  const [films, setFilms] = useState([]);
  let filmsData = useFetch(baseUrl);
  console.log(filmsData);

  useEffect(() => {
    swapiService.getFilms().then(result => setFilms(result.results));
  }, []);

  return (
    <div className="App ">
      <div className="App-header">
        <FilmsContext.Provider value={films}>
          <Navigation api={api} />

          <Routes>
            <Route path='/' element=<Home /> />
            <Route path='/films' element=<Films /> />
            <Route path='/people' element=<People /> />
            <Route path='/planets' element=<Planets /> />
            <Route path='/species' element=<Species /> />
            <Route path='/vehicles' element=<Vehicles /> />
            <Route path='/starships' element=<Starships /> />

            <Route path='/films/:filmId/*' element=<FilmCard /> />
          </Routes>
        </FilmsContext.Provider>
      </div>
    </div>
  );
}

export default App;
