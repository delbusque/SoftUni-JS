import { useContext } from "react";
import TaskContext from "../contexts/TaskContext.js";
import Task from "./Task.js";
import styles from './TodoList.module.css'

const TodoList = () => {

    const { tasks } = useContext(TaskContext);

    return (
        <>

            <h2>My Todo List::</h2>

            <ul className={styles['list']}>
                {tasks.map(x => <Task key={x._id} task={x} />)}
            </ul>
        </>
    )
};

export default TodoList;