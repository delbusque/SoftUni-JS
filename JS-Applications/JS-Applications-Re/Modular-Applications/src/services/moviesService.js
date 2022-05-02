import * as request from './requester.js'
import * as api from './api.js'

export const getAll = () => request.get(`${api.movies}`)

export const search = (text) => request.get(`${api.movies}?where=title%20LIKE%20"${text}"`)

export const getOne = (id) => request.get(`${api.movies}/${id}`);

export const getMyMovies = (ownerId) => request.get(`${api.movies}?where=_ownerId%3D"${ownerId}"`)

export const create = (title, img, description) => request.post(`${api.baseUrl}/data/movies`, { title, img, description });

export const update = (id, title, img, description) => request.put(`${api.movies}/${id}`, { title, img, description })

export const deleteMovie = (id) => request.del(`${api.movies}/${id}`)