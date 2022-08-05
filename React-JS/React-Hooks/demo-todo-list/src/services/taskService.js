const baseUrl = 'http://localhost:3030/jsonstore/todos'

export const getTasks = () => fetch(baseUrl).then(res => res.json());

export const createTask = (task) => fetch(baseUrl, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(task)
}).then(res => res.json());


export const deleteTask = (taskId) => fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE'
}).then(res => res.json());

export const editTask = (taskId, task) => fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(task)
}).then(res => res.json());