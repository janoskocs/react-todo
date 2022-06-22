import React from 'react'
import { useState } from 'react'

const AddTask = ({ addNew }) => {

    const [newTask, setNewTask] = useState({
        task: ''
    })

    const addTask = (e) => {
        e.preventDefault();
        addNew(newTask)
    }


    return (
        <form className='addNewForm'>
            <input onChange={(e) => setNewTask(e.target.value)} type='text'></input>
            <button onClick={addTask}>Add todo</button>
        </form>
    )
}

export default AddTask