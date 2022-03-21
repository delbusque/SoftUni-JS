import * as request from './requester.js'
import * as api from './api.js'

export function login(email, password) {
    return request.post(api.login, { email, password })
        .then(data => {
            console.log(data);
        })
}