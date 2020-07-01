// Native React
import React, { useState, useContext, useEffect } from 'react';

// Context
import ProjectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';


const FormTask = () => {

    // Declare State access your Context
    const projectContext = useContext(ProjectContext);

    // Subtract State Properties
    const { project } = projectContext;

    // Declare State access your Context
    const taskContext = useContext(TaskContext);

    // Subtract State Properties
    const { taskSelected ,addTask, errorFromAddTasks, showErrorFromAddTask, getAllTasks, updateTask } = taskContext;
   
    // Create State
    let initilaStateTask = {
        name: '',
        state: false
    }
    const [task, setTask] = useState(initilaStateTask);

    // Subtract State Properties
    const { name } = task;

    // UseEffect
    useEffect(() => {
        
        if(taskSelected) {
            setTask(taskSelected);
        } else {
            setTask(initilaStateTask);
        }

        // eslint-disable-next-line
    }, [taskSelected])

    // Prevent component return error with no data available.
    if( !project ) return null;

    // Array Destructurin for substract project current
    const [ projectSelected ] = project;

    // HandleChange
    const handleChange = e => {

        setTask({ ...task,
            [e.target.name] : e.target.value
        });

    }

    // HandleSubmite
    const handleSubmit = e => {

        // Prevent default behavior
        e.preventDefault();

        // Fields Validate
        if(!name.trim()) return showErrorFromAddTask();

        if(taskSelected) {
            // Edit Task
            updateTask(task);
        } else {
            // Create Task
            task.project = projectSelected.id;
            addTask(task);
        }

        // Get Task Current
        getAllTasks(projectSelected.id);

        // Form Reset
        setTask({
            name: '',
            state: false
        })

    }

    return ( 
        <div className="formulario">
            <form onSubmit={handleSubmit}>
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre de Tarea"
                        name="name"
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-block"
                        value={ taskSelected ? "Editar Tarea" : "Agregar Tarea" }
                    />
                </div>
            </form>
            {
                errorFromAddTasks ? <p className="mensaje error"> El nombre de la tarea es obligatorio. </p> : null
            }
        </div>
     );
}
 
export default FormTask;