import { getToken } from './authService.js'

function requester(method, url, data) {
    let options = {};
    let token = getToken();

    if (method != 'GET') {
        options = {
            method,
            headers: {
                'Content-Type': 'application/json',
                //...(token && { 'X-Authorization': token })
            },
            body: JSON.stringify(data)
        }
    }

    //if (method == 'GET' && token) {
    //    options = {
    //        method,
    //        headers: {
    //            'Content-Type': 'application/json',
    //            'X-Authorization': token
    //        },
    //        body: JSON.stringify(data)
    //    }
    //}

    if (token) {
        options.headers = {
            ...(options.headers),
            'X-Authorization': token
        }
    }

    return fetch(url, options).then(res => {
        if (res.url.endsWith('logout')) {
            return res;
        }
        return res.json()
    })
}

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');
export const patch = requester.bind(null, 'PATCH');