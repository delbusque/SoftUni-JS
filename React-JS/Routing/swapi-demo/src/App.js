// import { useFetch } from './hooks/useFetch.js'
// const baseUrl = 'https://swapi.py4e.com/api/films';
// let filmsData = useFetch(baseUrl);

import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';

import { FilmsContext } from './contexts/FilmContext.js';
import { PlanetsContext } from './contexts/PlanetsContext.js'
import { UserContext } from './contexts/UserConext.js';

import * as swapiService from './services/swapiService.js'

import Navigation from './components/navigation/Navigation.js';
import Home from './components/Home.js';
import Films from './components/films/Films.js';
import People from './components/People.js';
import Planets from './components/Planets.js';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import Register from './components/Register.js';
import Starships from './components/Starships.js';
import { FilmCard } from './components/films/FilmCard.js';
import { AuthProvider } from './contexts/UserConext.js';

function App() {

  const [api, setApi] = useState({});
  const [films, setFilms] = useState([]);
  const [planets, setPlanets] = useState([]);


  useEffect(() => {
    swapiService.getApi().then(data => setApi(data));
    swapiService.getFilms().then(result => setFilms(result.results));
    swapiService.getPlanets().then(result => setPlanets(result.results));
  }, [])


  return (
    <AuthProvider>
      <div className="App ">
        <div className="App-header">

          <Navigation api={api} />
          <PlanetsContext.Provider value={planets}>
            <FilmsContext.Provider value={films}>
              <Routes>
                <Route path='/' element=<Home /> />
                <Route path='/films' element=<Films /> />
                <Route path='/people' element=<People /> />
                <Route path='/planets' element=<Planets /> />
                <Route path='/login' element=<Login /> />
                <Route path='/register' element=<Register /> />
                <Route path='/logout' element=<Logout /> />
                <Route path='/starships' element=<Starships /> />

                <Route path='/films/:filmId/*' element=<FilmCard /> />
              </Routes>
            </FilmsContext.Provider>
          </PlanetsContext.Provider>

        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
