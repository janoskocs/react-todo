import Todo from "./Todo"
const Todolist = ({ tasks }) => {

    return (
        <>
            {tasks.map((task) => (
                <Todo key={task.id} task={task.task} completion={task.isDone} />
            ))}
        </>

    )
}

export default Todolist