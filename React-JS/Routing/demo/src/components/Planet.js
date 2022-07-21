import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import styles from './Planet.module.css'

export default function Planet() {
    const { planetId } = useParams();
    const navigate = useNavigate();

    const [planet, setPlanet] = useState({});

    useEffect(() => {
        fetch(`https://swapi.dev/api/planets/${planetId}`)
            .then(res => res.json())
            .then(planet => {
                setPlanet(planet)
            })
    }, [planetId])


    const nextPlanetHandler = () => {
        navigate(`/planets/${Number(planetId) + 1}`, { replace: true });
    }
    const previousPlanetHandler = () => {
        if (planetId > 1) {
            navigate(`/planets/${Number(planetId) - 1}`);
        }

    }

    return (
        <>
            <div className={styles.planet}>
                <h1 className={styles['planet-header']}>Planet {planetId}</h1>

                <h2>name: {planet.name}</h2>
                <h2>climate: {planet.climate}</h2>
                <h2>population: {planet.population}</h2>
                <h2>terrain: {planet.terrain}</h2>
                <h2>diameter: {planet.diameter}</h2>

            </div>
            <div className={styles['planet-header']}>
                <button onClick={previousPlanetHandler} >{'<'} Previous </button>
                <button onClick={nextPlanetHandler}> Next {'>'}</button>
            </div>

        </>
    )
}