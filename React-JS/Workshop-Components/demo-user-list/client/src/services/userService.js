const baseUrl = 'http://localhost:3005/api/users';

export const getAll = async () => {
    const responce = await fetch(baseUrl);
    const result = await responce.json();
    return result;
}

export const getOne = async (user) => {
    const responce = await fetch(`${baseUrl}/${user._id}`)
    const result = await responce.json();
    return result;
}

export const deleteOne = async (user) => {
    const responce = await fetch(`${baseUrl}/${user._id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
    const result = await responce.json();
    return result;
}

export const addUser = (userData) => fetch(baseUrl, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(userData)
}).then(res => res.json())