import styles from '../components/films/Films.module.css'

import { Link } from "react-router-dom";
import { useContext } from 'react';
import { PlanetsContext } from '../contexts/PlanetsContext.js';


export default function Planets() {

    const planets = useContext(PlanetsContext);
    console.log(planets);
    return (
        <ul className={styles['film-ul']}>
            {planets.map(planet =>
                <Link to={`/planets/${planet.name}`} className={styles['planet-link']} key={planet.name} >
                    {planet.name}
                </Link>)
            }
        </ul >
    )
}