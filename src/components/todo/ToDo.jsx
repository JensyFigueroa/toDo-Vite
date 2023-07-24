
const ToDo = ({ todo, index, deleteToDo, updateState, updateTodo }) => {

  const { id, title, description, priority, state } = todo


  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td className={`${state && 'text-decoration-line-through'}`}>{title}</td>
      <td className={`${state && 'text-decoration-line-through'}`}>{description}</td>
      <td>{priority && <span className="badge text-bg-primary">Priority</span>}</td>
      <td>{state ? <span className="badge rounded-pill text-bg-success" onClick={() => updateState(id)}><i className="fa-regular fa-circle-check"></i> Completado</span> : <span className="badge rounded-pill text-bg-secondary" onClick={() => updateState(id)}> <i className="fa-regular fa-clock"></i> Pendiente</span>}</td>
      <td className="d-flex gap-2">
        <button className="btn btn-sm btn-danger" onClick={() => deleteToDo(id)}>
          <i className="fa-solid fa-trash-can"></i> Delete
        </button>
        <button className="btn btn-sm btn-warning" onClick={() => updateTodo(id)}>
          <i className="fa-solid fa-pencil"></i> Update
        </button>

      </td>
    </tr>
  )
}

export default ToDo