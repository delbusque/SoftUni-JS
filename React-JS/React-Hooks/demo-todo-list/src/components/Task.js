import styles from './Task.module.css'
import { useEffect, useContext, useState } from 'react';

import TaskContext from '../contexts/TaskContext';

const Task = ({ task }) => {
    // Unmounting component by returning a function for side effect
    useEffect(() => {
        console.log('Mounted');

        return () => console.log('Unmounted');
    }, []);

    const [isEdit, setIsEdit] = useState(false)

    let { taskDeleteHandler, editTaskHandler } = useContext(TaskContext);

    const taskEditClickHandler = () => {
        setIsEdit(true);
    }

    const onEdit = (e) => {
        e.preventDefault();
        const { title } = Object.fromEntries(new FormData(e.target))
        editTaskHandler(task, title);
        setIsEdit(false)
    }

    const taskTitle = (
        <>
            <span>
                {task.title}
            </span>
            < button className={styles['button-wrapper']} onClick={() => taskDeleteHandler(task._id)}>
                Delete me
            </button >
            <button className={styles['button-wrapper']} onClick={taskEditClickHandler}>
                Edit me
            </button>
        </>
    );

    const editTask = (
        <form onSubmit={onEdit}>
            <input type='text' name='title' defaultValue={task.title} />
            <input type="submit" value='edit' />
        </form>
    )

    return (

        <li className={styles['li-wrapper']} >

            {isEdit ? editTask : taskTitle}


        </li >
    )
}

export default Task;