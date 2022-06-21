import './App.css'
function App() {


  return (
    <div>
      <h1>Hello Janos, check out your todo list below!</h1>
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
