import { Todo } from "./Todo"
import { useState, useEffect } from "react"

export const Main = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos').then(res => res.json())
            .then(data => setTodos(Object.values(data)));
    }, []);

    const clickHandler = (todoId) => {
        setTodos(state => state.map(todo => todo._id == todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo))
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