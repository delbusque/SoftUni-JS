import { useState } from 'react';
import styles from './Task.module.css'
import * as taskService from '../services/taskService.js';

const CreateTask = ({ taskCreateHandler }) => {
    const [task, setTask] = useState('');

    const onChange = (e) => {
        setTask(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        taskService.createTask(data)
            .then(res => {
                taskCreateHandler(res);
                return setTask('');
            })
            .catch(err => console.log(err));
    }

    return (
        <form onSubmit={onSubmit}>
            <input type='text' placeholder='Water flowers' name='title' value={task} onChange={onChange} />
            <input type='submit' className={styles['button-wrapper']} value='Submit' />
        </form>
    )
}

export default CreateTask;