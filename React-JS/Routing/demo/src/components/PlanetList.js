import { useEffect, useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import CurrentPlanet from './CurrentPlanet';



const PlanetList = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/planets').then(res => res.json())
            .then(data => {
                setPlanets(data.results);
            })
    }, [])


    return (
        <>
            <div>
                {planets.map((planet, i) => {
                    const id = i + 1;
                    return <Link to={`details/${planet.name}`} key={i + 1}><h2>{planet.name}</h2></Link>
                })}

            </div>

            <div>
                <Routes>
                    <Route path='details/:planetName/*' element={<CurrentPlanet planets={planets} />} />
                </Routes>
            </div>
        </>

    )
}

export default PlanetList;