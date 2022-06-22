import React from 'react'
import { useState } from 'react'

const Task = ({ task, markComplete }) => {

    const [todoStatus, setTodoStatus] = useState({ task })

    const markCompleteBtn = (e) => {
        e.preventDefault();

        markComplete(task.id, task.isDone)
    }
    return (
        <div className={task.isDone ? 'todoItem completed' : 'todoItem'}>
            <p>{task.task}</p>
            <button onClick={markCompleteBtn}>{task.isDone ? 'Delete' : 'Mark as complete'}</button>
        </div>
    )
}

export default Task