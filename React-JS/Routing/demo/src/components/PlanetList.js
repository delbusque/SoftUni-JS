import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';




const PlanetList = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/planets').then(res => res.json())
            .then(data => {
                setPlanets(data.results);
            })
    }, [])


    return (
        <div>
            {planets.map((planet, i) => {
                const id = i + 1;
                return <Link to={{ pathname: `details/${planet.name}`, state: { item: planet } }} key={i + 1}><h2>{planet.name}</h2></Link>
            })}

        </div>

    )
}

export default PlanetList;