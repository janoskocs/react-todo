import React from 'react'
import Completebtn from './Completebtn'
import Deletebtn from './Deletebtn'

const Todo = ({ task, completion }) => {
    return (
        <p className={completion ? 'complete' : ''}>{task}</p>
    )
}

export default Todo