// Native React
import React from 'react';

// Components
import NewProject from '../projects/NewProyect';
import ListProjects from '../projects/ListProjects'

const Sidebar = () => {

    return ( 
        <aside>
            <h1>Admin<span>Projects</span></h1>

            <NewProject />

            <div className="proyectos">
                <h2>Mis Proyectos</h2>

                <ListProjects />

            </div>

        </aside>
    );
}
 
export default Sidebar;