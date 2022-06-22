import './App.css'
function App() {


  return (
    <div className='appContainer'>
      <h1>Amazing Todo App</h1>

      <section className='todoList'>
        <div className='todoItem'>
          <p>Food Shopping</p>
          <button>Mark as complete</button>
        </div>
        <div className='todoItem'>
          <p>Build projects</p>
          <button>Mark as complete</button>
        </div>
        <div className='todoItem'>
          <p>File taxes</p>
          <button>Mark as complete</button>
        </div>
      </section>

      <section className='todoList completed'>
        <div className='todoItem completed'>
          <p>Work out</p>
          <button>Delete</button>
        </div>
        <div className='todoItem completed'>
          <p>Cook dinner</p>
          <button>Delete</button>
        </div>
      </section>

      <form>
        <input type='text'></input>
        <button>Add todo</button>
      </form>
    </div>
  );
}

export default App;
