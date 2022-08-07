import styles from './Task.module.css'
import { useEffect, useContext } from 'react';

import TaskContext from '../contexts/TaskContext';


const Task = ({ task }) => {
    // Unmounting component by returning a function for side effect
    useEffect(() => {
        console.log('Mounted');

        return () => console.log('Unmounted');
    }, [])

    let { taskDeleteHandler } = useContext(TaskContext);

    return (

        <li className={styles['li-wrapper']} >
            {task.title}
            < button className={styles['button-wrapper']} onClick={() => taskDeleteHandler(task._id)}>
                Delete me
            </button >
            <button className={styles['button-wrapper']} >
                Edit me
            </button>
        </li >
    )
}

export default Task;