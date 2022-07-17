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

export const edit = async (user, userData) => {
    const responce = await fetch(`${baseUrl}/${user._id}`, {
        method: 'PUT',
        headers: {
            'text-content': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    const data = await responce.json();
    return data.user;
}