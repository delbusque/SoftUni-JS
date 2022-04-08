import * as api from './api.js';
import * as request from './requester.js';

export const getAll = () => request.get(`${api.albums}?sortBy=_createdOn%20desc&distinct=name`);

export const getByName = (name) => request.get(`${api.albums}?where=name%20LIKE%20%22${name}%22`)

export const create = (album) => request.post(api.albums, album);

export const getOne = (id) => request.get(`${api.albums}/${id}`);

export const update = (id, album) => request.put(`${api.albums}/${id}`, album);

export const del = (id) => request.del(`${api.albums}/${id}`);