import { useState } from "react"
import Swal from 'sweetalert2'

const FormToDo = ({ addTodo, cantToDo }) => {

    const [errors, setErrors] = useState('')

    const [toDo, setToDo] = useState({
        title: '',
        description: '',
        priority: false,
        state: 'select'
    })

    const { title, description, priority, state } = toDo

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target
        setToDo({ ...toDo, [name]: type === 'checkbox' ? checked : value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        /* Validacion */
        if (!title.trim() || !description.trim() || state === 'select') {
            setErrors('Obligatory field')
            // return Swal.fire({
            //     icon: 'error',
            //     title: 'Oops...',
            //     text: 'Something went wrong!',
            //     footer: '<a href=""> Why do I have this issue?</a>'
            // })

        }else{

        /* Enviamos data */
        //  console.log('Enviando data')

     
            const toDoExist = addTodo({
                id: Date.now(), 
                ...toDo,
                state: state === 'completado'
    
            })
    
            if (toDoExist) {
                return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'To do already exists',
                    footer: '<a href=""> Why do I have this issue?</a>'
                })
            }else{
                return Swal.fire({
                    position:'center',
                    icon:'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        } 
   
    }

    return (
        <>
            <h1 className="my-3 text-center">Form to Do</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input id="title" className="form-control mb-2" type="text" name='title' placeholder='Enter to Do' value={title} onChange={handleChange} />
                    {errors && <p style={{ color: 'red', fontStyle: 'italic', fontSize: '12px' }}>{title.length === 0 && errors}</p>}
                </div>

                <div>
                    <label htmlFor="description">Description:</label>
                    <input id="description" className="form-control mb-2" type="text" name="description" placeholder="Enter description" onChange={handleChange} value={description} />
                    {errors && <p style={{ color: 'red', fontStyle: 'italic', fontSize: '12px' }}>{description.length === 0 && errors}</p>}
                </div>

                <div>
                    <input className="form-check-input mx-2 mb-2" type="checkbox" name="priority" id="inputCheck" checked={priority} onChange={handleChange} />
                    <label htmlFor="inputCheck">Give priority</label>
                </div>

                <div>
                    <label htmlFor="selectState">State:</label>
                    <select className="form-select mb-2" name="state" id="selectState" onChange={handleChange}>
                        <option value="select">Select a state ...</option>
                        <option value="pendient">Pendient</option>
                        <option value="complete">Complete</option>
                    </select>
                    {errors && <p style={{ color: 'red', fontStyle: 'italic', fontSize: '12px' }}>{state === 'select' && errors}</p>}
                </div>

                <div>
                    <button className="btn btn-primary" type="submit">Add to Do</button>
                </div>
            </form>
        </>

    )
}

export default FormToDo