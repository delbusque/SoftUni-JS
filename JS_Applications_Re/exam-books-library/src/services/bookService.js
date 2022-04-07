import * as api from './api.js';
import * as request from './requester.js';

export const getAll = () => request.get(`${api.books}?sortBy=_createdOn%20desc`);

export const getOwn = (userId) => request.get(`${api.books}?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);

export const create = (book) => request.post(api.books, book);

export const getOne = (id) => request.get(`${api.books}/${id}`);

export const update = (id, book) => request.put(`${api.books}/${id}`, book);

export const del = (id) => request.del(`${api.books}/${id}`);