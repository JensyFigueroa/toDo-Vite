import ToDo from '../todo/ToDo'

const ListTodo = ({ todos, deleteToDo, updateState, updateTodo }) => {
   
   const arrayTodos = todos
   
    return (
        <div className='my-4'>
            <h1 className='text-center'>List To Do</h1>
            {arrayTodos.length === 0 ? <h3 className='text-center text-danger'>There There is nothing to do</h3>
            : <table className="table">
                <thead>
                    <tr>
                        <th className='text-center' scope="col">#</th>
                        <th className='text-center' scope="col">Title</th>
                        <th className='text-center' scope="col">Description</th>
                        <th className='text-center' scope="col">Priority</th>
                        <th className='text-center' scope="col">State</th>
                        <th className='text-center' scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, index) => <ToDo key={index} todo={todo} deleteToDo={deleteToDo} updateState={updateState} updateTodo={updateTodo} index={index} />)}

                </tbody>
            </table>
}
        </div>

    )
}

export default ListTodo