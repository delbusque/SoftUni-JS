import * as api from './api.js';
import * as request from './requester.js';

const USER_KEY = 'user';

export const login = (email, password) => {
    return request.post(api.login, { email, password }).then(user => {
        saveUser(user)
        return user;
    });
};

export const register = (email, password) => {
    return request.post(api.register, { email, password }).then(user => {
        if (user.code == 409) {
            localStorage.removeItem('user');
            alert(`A user with the same email already exists !`);

        } else {
            saveUser(user);
            return user;
        }

    })
};

export const logout = () => {
    return request.get(api.logout).finally(() => localStorage.removeItem(USER_KEY));
};

function saveUser(data) {
    localStorage.setItem(USER_KEY, JSON.stringify(data))
};

export function getUser() {
    let user = localStorage.getItem(USER_KEY);

    if (user) {
        return JSON.parse(user)
    }
};

export function isUser() {
    let user = localStorage.getItem(USER_KEY);

    if (user) {
        return true;
    }
};