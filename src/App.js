import { useState } from 'react';
import './App.css'
import Todolist from './components/Todolist';
import AddTask from './components/AddTask';
function App() {

  const [todoList, setTodoList] = useState([
    {
      id: 0,
      task: 'Food Shopping',
      isDone: false
    },
    {
      id: 2,
      task: 'Running',
      isDone: false
    },
    {
      id: 3,
      task: 'Cooking',
      isDone: false
    },
    {
      id: 4,
      task: 'Reading',
      isDone: true
    },
  ])

  const markComplete = (id, status) => {
    console.log(id, status)
  }

  const addNew = (task) => {

    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, task: task, isDone: false }
    console.log(newTask)
    setTodoList([...todoList, newTask])
  }
  return (
    <div className='appContainer'>
      <h1>Amazing Todo App</h1>

      <h3>Pending tasks</h3>
      {todoList.length > 0 ? <Todolist markComplete={markComplete} todoList={todoList.filter((task) => (!task.isDone && task))} /> : 'No tasks'} {/*Check if there are tasks in the array, if so check if they are not complete to render them in the pending task section*/}

      <h3>Completed tasks</h3>

      <Todolist todoList={todoList.filter((task) => (task.isDone && task))} /> {/*Filter tasks if they are done and render them in the complete section */}

      <h3>Add new task</h3>

      <AddTask addNew={addNew} />

    </div>
  );
}

export default App;
