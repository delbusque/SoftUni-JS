function requester(method, url, data) {
    let options = {};
    if (method != 'GET') {

        options = {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    }

    return fetch(url, options).then(res => res.json())
}

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');
export const patch = requester.bind(null, 'PATCH');