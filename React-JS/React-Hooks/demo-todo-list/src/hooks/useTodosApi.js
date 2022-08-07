const baseUrl = 'http://localhost:3030/jsonstore/todos';

const useTodosApi = () => {

    const removeTodo = (taskId) => {
        return fetch(`${baseUrl}/${taskId}`, {
            method: 'DELETE'
        }).then(res => res.json())
    }

    const createTodo = (task) => {
        return fetch(`${baseUrl}`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(task)
        }).then(res => res.json())
    }

    return {
        removeTodo,
        createTodo
    }

}

export default useTodosApi;