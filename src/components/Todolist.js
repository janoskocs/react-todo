import React from 'react'
import Task from './Task'

const TodoList = ({ todoList, markComplete, deleteTask }) => {

    return (
        <section className='todoList'>
            {todoList.map((task) => (
                <Task deleteTask={deleteTask} markComplete={markComplete} key={task.id} task={task} />
            ))}
        </section>
    )
}

export default TodoList