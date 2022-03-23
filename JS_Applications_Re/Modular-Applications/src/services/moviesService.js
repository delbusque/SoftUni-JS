import * as request from './requester.js'
import * as api from './api.js'

function getAll() {
    return fetch(`${api.baseUrl}/data/movies`).then(res => res.json());
}

function getOne(id) {
    return fetch(`${api.baseUrl}/data/movies/${id}`).then(res => res.json());
}
export const create = (title, img, description) => request.post(`${api.baseUrl}/data/movies`, { title, img, description });

export default {
    getAll,
    getOne,
}