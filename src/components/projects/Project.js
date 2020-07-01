// Native React
import React, { useContext } from 'react';

// Context
import ProjectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';

const Project = ({ project }) => {

    // Subtract Props Properties
    const { name, id } = project;

    // Declare State access your Context
    const projectContext = useContext(ProjectContext);

    // Subtract State Properties
    const { activeProject } = projectContext;

    // Declare State access your Context
    const taskContext = useContext(TaskContext);

    // Subtract State Properties
    const { getAllTasks } = taskContext;

    // Methods
    const selectProject = projectId => {
        activeProject(projectId);
        getAllTasks(projectId);
    };

    return ( 
        <li className="item-proyectos">
            <button
                type="button"
                className="btn btn-blank btn-proyect"
                onClick={ () => selectProject(id) }
            >
                { name }
            </button>
        </li>
     );
}
 
export default Project;