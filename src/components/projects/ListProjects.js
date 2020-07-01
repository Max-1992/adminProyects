// Native React
import React, { useContext, useEffect } from 'react';

// React Transition Group
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Require Context
import ProjectContext from '../../context/projects/projectContext';
import AlertContext from '../../context/alert/alertContext';

// Components
import Project from './Project';

const ListProjects = () => {

    // Declare State access your Context
    const projectContext = useContext(ProjectContext);

     // Subtract State Properties
     const { projects, msg, getAllProjects } = projectContext;

      // Declare State access your Context
      const alertContext = useContext(AlertContext);
 
      // Subtract State Properties
      const { alert, showAlert, hideAlert } = alertContext;

     // Call useEffect for get projects state
     useEffect(() => {

        // Validar si existe un error.
        if(msg) {
            showAlert(msg.msg, msg.category);
            setTimeout( () => {
                hideAlert();
            }, 5000);
        };

        getAllProjects();

        // eslint-disable-next-line
     }, [msg]);

     // Prevent component return error with no data available.
     if( projects.length === 0 ) return null;

    return ( 
        <ul>
            { alert ? (<div className={`alerta ${alert.category}`}> { alert.msg } </div>) : null }
            {
                <TransitionGroup>
                    {
                        projects.map( project => (
                            <CSSTransition
                                key={project.id}
                                timeout={200}
                                classNames="tarea"
                            >
                                <Project project={project} />
                            </CSSTransition>
                        ))
                    }
                </TransitionGroup> 
            }
        </ul>
     );
}
 
export default ListProjects;