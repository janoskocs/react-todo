import React from 'react'
import Task from './Task'

const TodoList = ({ todoList, markComplete }) => {

    return (
        <section className='todoList'>
            {todoList.map((task) => (
                <Task markComplete={markComplete} key={task.id} task={task} />
            ))}
        </section>
    )
}

export default TodoList