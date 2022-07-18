const baseUrl = 'http://localhost:3005/api/users'

export const getAll = async () => {
    const responce = await fetch(baseUrl);
    const data = await responce.json();

    return data.users;
}

export const getOne = async (userId) => {
    const responce = await fetch(`${baseUrl}/${userId}`);
    const data = await responce.json();

    return data.user;
}

export const create = async (user) => {
    const responce = await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    const data = await responce.json();

    return data.user;
}

export const edit = async (userData, userId) => {
    const responce = await fetch(`${baseUrl}/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    const data = await responce.json();
    return data.user;
}