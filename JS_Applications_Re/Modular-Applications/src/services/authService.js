import * as request from './requester.js'
import * as api from './api.js'

function saveData({ accessToken, email, _id }) {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('email', email);
    localStorage.setItem('_id', _id);
}

export function login(email, password) {
    return request.post(api.login, { email, password })
        .then(data => {
            console.log(data);
            saveData(data)
        })
}

export function register(email, password) {
    return request.post(api.register, { email, password })
        .then(data => {
            console.log(data);
            saveData(data)
        })
}