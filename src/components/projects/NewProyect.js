import React, { useState, useContext, Fragment } from 'react';

// Context
import ProjectoContext from '../../context/projects/projectContext';

const NewProject = () => {

    // Declare State access your Context
    const projectContext = useContext(ProjectoContext);

    // Subtract State Properties
    const { newProject, errorFromAddProject, showForm, addProject, showErrorFromAddProject } = projectContext;

    // Create State
    let initialStateProject = {
        name: ''
    };
    const [project, setProject] = useState(initialStateProject);

    // Subtract State Properties
    const { name } = project;

    // HandleChange
    const handleChange = e => {

        setProject({ ...project,
            [e.target.name] : e.target.value
        });

    };

    // HandleSubmite
    const handleSubmit = e => {

        // Prevent default behavior
        e.preventDefault();

        // Fields Validate
        if(!name) return showErrorFromAddProject();

        // Create Project
        addProject(project);

        // Clean local state
        setProject({
            name: ''
        });

        
    };

    // Show Form
    const clickShowForm = () => {
        showForm();
    }

    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={clickShowForm}
            >
                Nuevo Proyecto
            </button>

            {
                newProject ?
                    
                    (<form className="formulario-nuevo-proyecto" onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            className="input-text"
                            placeholder="Nombre del proyecto..."
                            name="name"
                            onChange={handleChange}
                        />

                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Agregar Proyecto"
                        />
                    </form>)

                    :

                    null
            }

            {
                errorFromAddProject ? <p className="mensaje error"> El nombre del proyecto es obligatorio. </p> : null
            }

        </Fragment>

     );
}
 
export default NewProject;