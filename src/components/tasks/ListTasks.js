// Native React
import React, { Fragment, useContext } from 'react';

// React Transition Group
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Components
import Task from './Task';


// Context
import ProjectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';


const ListTasks = () => {

    // Declare State access your Context
    const projectContext = useContext(ProjectContext);

    // Subtract State Properties
    const { project, deleteProject } = projectContext;

    // Declare State access your Context
    const taskContext = useContext(TaskContext);

    // Subtract State Properties
    const { projectTasks } = taskContext;

    // Prevent component return error with no data available.
    if( !project ) return <h2>Selecciona un Proyecto</h2>

    // Array Destructurin for substract project current
    const [ projectSelected ] = project;


    // Methods
    const removeProject = projectId => {
        deleteProject(projectId);
    };

    return ( 
        <Fragment>
            <h2> 
                Proyecto: <span> { projectSelected.name } </span> 
            </h2>

            <ul className="listado-tares">
                {
                    (projectTasks.length === 0) ?
                    (
                        <li className="tarea">
                            <p>No hay tareas agregadas</p>
                        </li>
                    ) :
                    <TransitionGroup>
                        { 
                            projectTasks.map( task => (
                                <CSSTransition 
                                    key={task.id}
                                    timeout={200}
                                    className="tarea"
                                >
                                    <Task task={task} />
                                </CSSTransition>     
                            )) 
                        }
                    </TransitionGroup>
                   
                }
            </ul>

            <button
                type="button"
                className="btn btn-deleted"
                onClick={ () => removeProject(projectSelected.id) }
            >
                Eliminar Proyecto &times;
            </button>
        </Fragment>

     );
}
 
export default ListTasks;