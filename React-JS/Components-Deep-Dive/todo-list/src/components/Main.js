import { Todo } from "./Todo"

export const Main = () => {
    return (

        <main class="main">

            <section class="todo-list-container">
                <h1>Todo List</h1>

                <div class="add-btn-container">
                    <button class="btn">+ Add new Todo</button>
                </div>

                <div class="table-wrapper">




                    <table class="table">
                        <thead>
                            <tr>
                                <th class="table-header-task">Task</th>
                                <th class="table-header-status">Status</th>
                                <th class="table-header-action">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            <Todo />

                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    )
}