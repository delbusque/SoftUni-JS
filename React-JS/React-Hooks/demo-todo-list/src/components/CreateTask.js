import { useState } from 'react';

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
            <input type='submit' value='Submit' />
        </form>
    )
}

export default CreateTask;