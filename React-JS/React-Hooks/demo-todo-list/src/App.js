import { useState } from 'react';
import uniqid from 'uniqid';

import styles from './App.module.css'
import CreateTask from './components/CreateTask.js';
import TodoList from './components/TodoList.js';

function App() {

  const [tasks, setTasks] = useState([
    { _id: uniqid(), title: 'First task' },
    { _id: uniqid(), title: 'Second task' },
    { _id: uniqid(), title: 'Third task' }
  ]);

  const taskCreateHandler = (task) => {
    let _id = uniqid();

    setTasks(oldTasks => {
      return [...oldTasks, { _id, title: task }]
    })
  }


  return (
    <div className={styles['div-wrapper']}>
      <TodoList tasks={tasks} />

      <CreateTask taskCreateHandler={taskCreateHandler} />
    </div>
  );
}

export default App;
