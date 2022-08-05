import Task from "./Task.js";

const TodoList = ({ tasks, taskDeleteHandler }) => {
    return (
        <>

            <h2>My Todo List::</h2>

            <ul>
                {tasks.map(x => <Task key={x._id} task={x}
                    taskDeleteHandler={taskDeleteHandler} />)}
            </ul>
        </>
    )
};

export default TodoList;