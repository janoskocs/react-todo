import { useState } from 'react';
import Greeting from './components/Greeting';
import Todolist from './components/Todolist';
import AddTodo from './components/AddTodo';
import './App.css'
function App() {

  const userName = 'Janos'
  const [todos, setTodos] = useState([
    {
      task: 'Food shopping',
      isDone: true,
      id: 1
    },
    {
      task: 'Project',
      isDone: false,
      id: 2
    },
    {
      task: 'React',
      isDone: false,
      id: 3
    },
  ])

  const newTodo = (task) => {
    const newTodos = [...todos, task]
    setTodos(newTodos)
    console.log('new todo: ' + task)
    console.log(todos)
  }

  return (
    <div>
      <Greeting userName={userName} />
      <Todolist tasks={todos} />
      <AddTodo addNew={newTodo} />
    </div>
  );
}

export default App;
