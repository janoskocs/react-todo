import { useState } from 'react';
import './App.css'
import Todolist from './components/Todolist';
function App() {

  const [todoList, setTodoList] = useState([
    {
      id: 0,
      task: 'Food Shopping',
      isDone: false
    },
    {
      id: 2,
      task: 'Goo Shopping',
      isDone: false
    },
    {
      id: 3,
      task: 'heeyy Shopping',
      isDone: false
    },
    {
      id: 4,
      task: 'Okay Shopping',
      isDone: true
    },
  ])

  return (
    <div className='appContainer'>
      <h1>Amazing Todo App</h1>

      <h3>Pending tasks</h3>
      {todoList.length > 0 ? <Todolist todoList={todoList.filter((task) => (!task.isDone && task))} /> : 'No tasks'}

      <h3>Completed tasks</h3>

      <Todolist todoList={todoList.filter((task) => (task.isDone && task))} />

      <h3>Add new task</h3>
      <form className='addNewForm'>
        <input type='text'></input>
        <button>Add todo</button>
      </form>
    </div>
  );
}

export default App;
