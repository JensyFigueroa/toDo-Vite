import { useEffect, useState } from "react"
import FormToDo from "./components/formulario/FormToDo"
import ListTodo from "./components/listTodo/ListTodo"

const initialToDo = JSON.parse(localStorage.getItem('todos')) || []

const App = () => {
  const [todos, setTodos] = useState(initialToDo)

  useEffect(() => { 
    localStorage.setItem('todos', JSON.stringify(todos)) 
   },[todos])

  const addTodo = (todo) => {
    const result = todos.find(tdo => tdo.title === todo.title)
    if (result) {
      return true
    }else{
      setTodos([...todos, todo])
    }
  }

  const deleteToDo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const updateState = (id) => {
    const newArray = todos.map(todo => {
      if (todo.id === id) {todo.state = !todo.state}

      return todo 
      
    })
    setTodos(newArray)
    console.log(id)
  }
  
  const updateTodo = (id) => {
    console.log(id)
    /* Falta agregar la logica para que se modifique desde el formulario */
  }


  const orderTodo = (arrTodos) => {
    return arrTodos.sort((a, b) =>{
      if(a.priority === b.priority) return 0
      if(a.priority) return -1
      if(!a.priority) return 1
    })
  }


  return (
    <div className='container mb-2'>
      <FormToDo addTodo={addTodo} />
      <ListTodo todos={orderTodo(todos)} deleteToDo={deleteToDo} updateState={updateState} updateTodo={updateTodo}/>
    </div>
  )
}

export default App