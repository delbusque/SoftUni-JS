import { useState, useEffect } from "react";

export const CharacterList = () => {

    const [characterList, setCharacterList] = useState([]);
    useEffect(() => {
        fetch('http://swapi.dev/api/people').then(res => res.json())
            .then(data => setCharacterList(data.results))
    }, [])

    return (
        <ul>
            {!characterList.length && <li>Loading ...</li>}
            {characterList.map(char => (
                <li key={char.name}>{char.name}</li>
            ))}
        </ul>
    )
}