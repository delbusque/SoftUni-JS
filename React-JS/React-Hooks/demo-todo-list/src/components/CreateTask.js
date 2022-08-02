import { useState } from 'react';
import styles from './Task.module.css'


const CreateTask = ({ taskCreateHandler }) => {
    const [task, setTask] = useState('');

    const onChange = (e) => {
        setTask(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        taskCreateHandler(task);
        setTask('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input type='text' placeholder='Water flowers' name='taskName' value={task} onChange={onChange} />
            <input type='submit' className={styles['button-wrapper']} value='Submit' />
        </form>
    )
}

export default CreateTask;