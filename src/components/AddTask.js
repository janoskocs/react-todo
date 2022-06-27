import React from 'react'
import { useState } from 'react'

const AddTask = ({ addNew }) => {

    const [newTask, setNewTask] = useState('')
    const [error, setError] = useState(false)

    const addTask = (e) => {
        e.preventDefault();
        if (newTask === '') {
            setError(true)
        } else {
            setError(false)
            addNew(newTask)
            setNewTask('')
        }

    }
    return (
        <form className='addNewForm'>

            <input onChange={(e) => setNewTask(e.target.value)} type='text' value={newTask}></input>
            <button onClick={addTask}>Add todo</button>
            {error && <div>Please enter a task before adding.</div>}
        </form>
    )
}

export default AddTask