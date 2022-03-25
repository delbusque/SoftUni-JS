import * as request from './requester.js'
import * as api from './api.js'

export const getAll = () => request.get(`${api.movies}`)

export const getOne = (id) => request.get(`${api.movies}/${id}`);

export const getMyMovies = (ownerId) => request.get(`${api.movies}?where=_ownerId%3D"${ownerId}"`)

export const create = (title, img, description) => request.post(`${api.baseUrl}/data/movies`, { title, img, description });