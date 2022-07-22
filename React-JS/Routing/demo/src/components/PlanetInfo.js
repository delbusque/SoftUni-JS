import { Link, useParams, Route, Routes } from 'react-router-dom';

export default function PlanetInfo({ planet }) {

    const { planetName } = useParams();

    return (

        <h3>with {planet.climate} climate and {planet.population} population ...</h3>

    )
}