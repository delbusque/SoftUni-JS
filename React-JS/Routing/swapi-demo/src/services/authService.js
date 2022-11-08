const baseUrl = 'http://localhost:3030/users'

export const login = async (loginData) => {
    const responce = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(loginData)
    });

    const result = await responce.json();
    return result;

}