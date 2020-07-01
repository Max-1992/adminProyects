// Native React
import React, { useContext, useEffect } from 'react';

// Require Context
import AuthContext from '../../context/auth/authContext';

// Components
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';
import FormTask from '../tasks/FormTask';
import ListTasks from '../tasks/ListTasks';
 
const Projects = () => {

    // Declare State access your Context
    const authContext = useContext(AuthContext);

    // Subtract State Properties
    const { authUser } = authContext;

    useEffect(() => {
        
        authUser();
        
        // eslint-disable-next-line
    }, [])

    return ( 
        <div className="contenedor-app">

            <Sidebar />

            <div className="seccion-principal">

                <Header />

                <FormTask />

                <main>
                    <div className="contenedor-tareas">
                        <ListTasks />
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Projects;