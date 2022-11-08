const baseUrl = 'https://swapi.py4e.com/api/';

export const getApi = () => fetch(baseUrl).then(res => res.json());

export const getFilms = async () => {
    const res = await fetch(`${baseUrl}films`);
    const data = await res.json();
    return data;
}

export const getPlanets = async () => {
    const res = await fetch(`${baseUrl}planets`);
    const data = await res.json();
    return data;
}

export const getOneFilm = (filmId) => fetch(`${baseUrl}films/${filmId}`).then(res => res.json())