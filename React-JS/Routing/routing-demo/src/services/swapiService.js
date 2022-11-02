const baseUrl = 'https://swapi.dev/api/';

export const api = () => fetch(baseUrl).then(res => res.json());