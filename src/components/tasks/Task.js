// Native React
import React, { useContext } from 'react';

// Context
import TaskContext from '../../context/tasks/taskContext';

const Task = ({ task }) => {

    // Declare State access your Context
    const taskContext = useContext(TaskContext);

    // Subtract State Properties
    const { getAllTasks, deleteTask, taskActive, updateTask } = taskContext;

     // Subtract Props Properties
     const { id, projectId, name, state } = task;

     // Methods
     const removeTask = () => {

        deleteTask(id);
        getAllTasks(projectId);

     }

     const stateUpdateTask = () => {

        if( state ) {
            task.state = false
        } else {
            task.state = true
        }

        updateTask(task);

     }

     const selectedTask = () => {
        taskActive(task)
     }

    return (
        <li className="tarea sombra">
            <p> 
                { name } 
            </p>

            <div className="estado">
                {
                    state ? 
                        (
                            <button
                                type="button"
                                className="completo"
                                onClick={stateUpdateTask}
                            >
                                Completo
                            </button>
                        )
                    :
                        (
                            <button
                                type="button"
                                className="incompleto"
                                onClick={stateUpdateTask}
                            >
                                Incompleto
                            </button>
                        )
                }
            </div>

            <div className="acciones">

                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={selectedTask}
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={removeTask}
                >
                    Eliminar
                </button>

            </div>
        </li>
    );
}
 
export default Task;