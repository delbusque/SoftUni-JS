import { Link, useParams, Route, Routes } from 'react-router-dom';
import PlanetInfo from './PlanetInfo';

export default function CurrentPlanet({ planets }) {

    const { planetName } = useParams();
    const planet = planets.find(p => p.name === planetName);

    return (
        <>
            <h2>Hello planet <Link to='info'>{planetName}</Link></h2>

            <div>
                <Routes>
                    <Route path='info' element={<PlanetInfo planet={planet} />} />
                </Routes>
            </div>
        </>
    )
}