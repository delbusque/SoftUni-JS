import Task from "./Task.js";

const TodoList = ({ tasks }) => {
    return (
        <>

            <h2>My Todo List::</h2>

            <ul>
                {tasks.map(x => <Task key={x._id} task={x} />)}
            </ul>
        </>
    )
};

export default TodoList;