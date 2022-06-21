import { useState } from 'react';
import Greeting from './components/Greeting';
import Todolist from './components/Todolist';
import './App.css'
function App() {

  const userName = 'Janos'
  const [todos, setTodos] = useState([
    {
      task: 'Food shopping',
      isDone: false
    },
    {
      task: 'Project',
      isDone: false
    },
    {
      task: 'React',
      isDone: false
    },
  ])
  return (
    <div>
      <Greeting userName={userName} />
      <Todolist />
      <ol>
        <li>Food shopping <button>Mark as complete</button> <button>Delete</button></li>
        <li>Project <button>Mark as complete</button> <button>Delete</button></li>
        <li>React <button>Mark as complete</button> <button>Delete</button></li>
      </ol>
      <form>
        <input type='text' value='Enter new todo'></input>
        <button>Add todo</button>
      </form>
    </div>
  );
}

export default App;
