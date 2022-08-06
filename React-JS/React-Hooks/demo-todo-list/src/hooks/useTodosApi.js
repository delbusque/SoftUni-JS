const baseUrl = 'http://localhost:3030/jsonstore/todos';

const useTodosApi = () => {

    const removeTodo = (taskId) => {
        fetch(`${baseUrl}/${taskId}`, { method: 'DELETE' }).then(res => res.json())
    }

    return {
        removeTodo
    }

}

export default useTodosApi;