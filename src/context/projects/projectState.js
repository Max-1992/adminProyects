// Native React
import React, { useReducer } from 'react';

// Context
import ProjectContext from './projectContext';

// Reducer
import ProjectReducer from './projectReducer';

// Types
import { FORM_PROJECT, GET_ALL_PROJECTS, ADD_PROJECT, VALID_FORM_ADD_PROJECT, ACTIVE_PROJECT, DELETE_PROJECT, ERROR_PROJECT } from '../../types';

// Services
import clientAxios from '../../services/axios';
import authToken from '../../services/authToken';



// Create State
const ProjectState = props => {

    // Declare Inital State
    const initialState = {
        newProject: false,
        projects: [],
        errorFromAddProject: false,
        project: null,
        msg: null
    }
    // Declare Dispatch Actions
    const [state, dispatch] = useReducer(ProjectReducer, initialState);

    // Methods Actions
    const showForm = () => {
        dispatch({
            type: FORM_PROJECT
        });
    };

    const getAllProjects = async () => {

        // Get token localStorage.
        const token = localStorage.getItem('token');

        // Verify that a token exists.
        if(token) {
            // Set up token in request headers.
            authToken(token);
        };
        
        try {

            const res = await clientAxios.get('/api/project');

            dispatch({
                type: GET_ALL_PROJECTS,
                payload: res.data.data.projects
            });
            
        } catch (error) {

            console.log(error);
            
        }

    };

    const addProject = async (newProject) => {

        // Get token localStorage.
        const token = localStorage.getItem('token');

        // Verify that a token exists.
        if(token) {
            // Set up token in request headers.
            authToken(token);
        };

        try {

            const res = await clientAxios.post('/api/project', newProject)

            dispatch({
                type: ADD_PROJECT,
                payload: res.data.data
            });
            
        } catch (error) {
            
            dispatch({
                type: VALID_FORM_ADD_PROJECT
            });

            const alert = {
                msg: error.response.data.error,
                category: 'alerta-error'
            };
            
            dispatch({
                type: ERROR_PROJECT,
                payload: alert
            });



        }

        
    };

    const showErrorFromAddProject = () => {
        dispatch({
            type: VALID_FORM_ADD_PROJECT,
        });
    };

    const activeProject = (projectId) => {
        dispatch({
            type: ACTIVE_PROJECT,
            payload: projectId
        })
    };
    
    const deleteProject = async (projectId) => {

        try {

            await clientAxios.delete(`/api/project/${projectId}`);

            dispatch({
                type: DELETE_PROJECT,
                payload: projectId
            });
            
        } catch (error) {

            const alert = {
                msg: error.response.data.error,
                category: 'alerta-error'
            };
            
            dispatch({
                type: ERROR_PROJECT,
                payload: alert
            });

        }

        

    };


    return (
       <ProjectContext.Provider 
            value={{
                newProject: state.newProject,
                projects: state.projects,
                errorFromAddProject: state.errorFromAddProject,
                project: state.project,
                msg: state.msg,
                showForm,
                getAllProjects,
                addProject,
                showErrorFromAddProject,
                activeProject,
                deleteProject
            }}
       >
           {props.children}
       </ProjectContext.Provider>
    )

}

export default ProjectState;