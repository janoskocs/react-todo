import React from 'react'
import { useState } from 'react'

const Task = ({ task, markComplete, deleteTask }) => {

    const checkBtnAction = (e) => {
        e.preventDefault();

        if (e.target.innerHTML === 'Mark as complete') {
            markCompleteBtn()
        } else if (e.target.innerHTML === 'Delete') {
            deleteTaskBtn()
        }
    }
    const deleteTaskBtn = () => {
        const accessId = task.id
        deleteTask(accessId)
    }
    const markCompleteBtn = () => {
        const accessId = task.id
        markComplete(accessId)
    }

    return (
        <div className={task.isDone ? 'todoItem completed' : 'todoItem'}>
            <p>{task.task}</p>
            <button onClick={checkBtnAction}>{task.isDone ? 'Delete' : 'Mark as complete'}</button>
        </div>
    )
}

export default Task