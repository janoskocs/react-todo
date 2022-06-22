import React from 'react'
import Task from './Task'

const TodoList = ({ todoList }) => {

    return (
        <section className='todoList'>
            {todoList.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </section>
    )
}

export default TodoList