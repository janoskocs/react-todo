import React, { useState } from 'react'

const AddTodo = ({ addNew }) => {
    const [newTodoTask, setNewTodo] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        addNew(newTodoTask)
        alert('hello')
    }
    return (
        <div>
            <input type='text' onChange={(e) => setNewTodo(e.target.value)} />
            <button onClick={onSubmit}>Add</button>
        </div>
    )
}

export default AddTodo