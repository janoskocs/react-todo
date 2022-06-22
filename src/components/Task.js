import React from 'react'

const Task = ({ task }) => {
    return (
        <div className={task.isDone ? 'todoItem completed' : 'todoItem'}>
            <p>{task.task}</p>
            <button >{task.isDone ? 'Delete' : 'Mark as complete'}</button>
        </div>
    )
}

export default Task