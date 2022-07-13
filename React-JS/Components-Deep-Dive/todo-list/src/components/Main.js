import { Todo } from "./Todo"
import { useState, useEffect } from "react"

export const Main = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos').then(res => res.json())
            .then(data => setTodos(Object.values(data)));
    }, []);

    const clickHandler = (todo) => {
        fetch(`http://localhost:3030/jsonstore/todos/${todo._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...todo, isCompleted: !todo.isCompleted })
        }).then(res => res.json())
            .then(modifiedTodo => { setTodos(oldTodos => oldTodos.map(x => x._id == modifiedTodo._id ? modifiedTodo : x)) })
    }

    return (

        < main className="main" >

            <section className="todo-list-container">
                <h1>Todo List</h1>

                <div className="add-btn-container">
                    <button className="btn">+ Add new Todo</button>
                </div>

                <div className="table-wrapper">

                    <table className="table">
                        <thead>
                            <tr>
                                <th className="table-header-task">Task</th>
                                <th className="table-header-status">Status</th>
                                <th className="table-header-action">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.map(todo => <Todo key={todo._id} {...todo} onClick={clickHandler} />)}
                        </tbody>
                    </table>
                </div>
            </section>
        </main >
    )
}