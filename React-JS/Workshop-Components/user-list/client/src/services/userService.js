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