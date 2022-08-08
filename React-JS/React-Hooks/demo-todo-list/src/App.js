import useFetch from './hooks/useFetch.js';
import useTodosApi from './hooks/useTodosApi.js';

import TaskContext from './contexts/TaskContext.js';

import * as taskService from './services/taskService.js';

import styles from './App.module.css'
import CreateTask from './components/CreateTask.js';
import TodoList from './components/TodoList.js';

function App() {

  const baseUrl = 'http://localhost:3030/jsonstore/todos';

  const [tasks, setTasks, isLoading] = useFetch(baseUrl, []);
  const { removeTodo, updateTodo } = useTodosApi();

  const taskCreateHandler = (task) => {

    setTasks(oldTasks => {
      return [...oldTasks, task]
    })
  }

  const taskDeleteHandler = async (taskId) => {

    await removeTodo(taskId);
    setTasks(oldTasks => oldTasks.filter(x => x._id !== taskId));
  }

  const editTaskHandler = async (task, newTitle) => {
    const updatedTask = { ...task, title: newTitle };

    await updateTodo(task._id, updatedTask);
    setTasks(oldTasks => oldTasks.map(x => x._id == task._id ? updatedTask : x));

  }

  return (
    <TaskContext.Provider value={{ tasks, taskDeleteHandler, editTaskHandler }}>
      <div className={styles['div-wrapper']}>
        {isLoading ? <p>Loading ... </p> : <TodoList />}
        <CreateTask taskCreateHandler={taskCreateHandler} />
      </div>
    </TaskContext.Provider>
  );

}

export default App;


