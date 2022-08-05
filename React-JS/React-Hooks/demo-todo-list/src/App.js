import uniqid from 'uniqid';

import useFetch from './hooks/useFetch.js';

import * as taskService from './services/taskService.js';

import styles from './App.module.css'
import CreateTask from './components/CreateTask.js';
import TodoList from './components/TodoList.js';

function App() {

  const baseUrl = 'http://localhost:3030/jsonstore/todos';

  const [tasks, setTasks, isLoading] = useFetch(baseUrl, []);

  //useEffect(() => {
  //  taskService.getTasks()
  //    .then(data => setTasks(oldTasks => (Object.values(data))))
  //    .catch(err => console.log(err));
  //}, []);


  const taskCreateHandler = (task) => {

    setTasks(oldTasks => {
      return [...oldTasks, task]
    })
  }

  const taskDeleteHandler = (taskId) => {
    taskService.deleteTask(taskId)
      .then(() => setTasks(oldTasks => oldTasks.filter(x => x._id !== taskId)))
      .catch(err => console.log(err));
  }

  return (
    <div className={styles['div-wrapper']}>
      {isLoading ? <p>Loading ... </p> : <TodoList tasks={tasks} taskDeleteHandler={taskDeleteHandler} />}
      <CreateTask taskCreateHandler={taskCreateHandler} />
    </div>
  );
}

export default App;


