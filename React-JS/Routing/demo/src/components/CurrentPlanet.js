import { Link, useParams } from 'react-router-dom';

export default function CurrentPlanet() {

    const { planetName } = useParams();

    return (
        <h2>Hello <Link to='info'>{planetName}</Link></h2>
    )
}