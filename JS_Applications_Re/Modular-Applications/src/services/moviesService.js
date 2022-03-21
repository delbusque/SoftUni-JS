import { baseUrl } from './api.js'

function getAll() {
    return fetch(`${baseUrl}/data/movies`).then(res => res.json());
}

function getOne(id) {
    return fetch(`${baseUrl}/data/movies/${id}`).then(res => res.json());
}

export default {
    getAll,
    getOne
}