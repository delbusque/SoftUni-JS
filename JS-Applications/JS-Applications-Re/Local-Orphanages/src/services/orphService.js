import * as api from './api.js';
import * as request from './requester.js';

export const getAll = () => request.get(`${api.orphs}?sortBy=_createdOn%20desc`);

export const getOwn = (userId) => request.get(`${api.orphs}?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);

export const create = (orph) => request.post(api.orphs, orph);

export const getOne = (id) => request.get(`${api.orphs}/${id}`);

export const update = (id, orph) => request.put(`${api.orphs}/${id}`, orph);

export const del = (id) => request.del(`${api.orphs}/${id}`);


export const donate = (orphId) => request.post(api.donations, orphId);

export const getDonations = (orphId) => request.get(`${api.donations}?where=postId%3D%22${orphId}%22&distinct=_ownerId&count`);

export const getSpecificDonation = (orphId, userId) => request.get(`${api.donations}?where=postId%3D%22${orphId}%22%20and%20_ownerId%3D%22${userId}%22&count`);