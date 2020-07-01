// Types
import { FORM_PROJECT, GET_ALL_PROJECTS, ADD_PROJECT, VALID_FORM_ADD_PROJECT, ACTIVE_PROJECT, DELETE_PROJECT, ERROR_PROJECT } from '../../types';

// Create Reducer
const ProjectReducer = ( state, action ) => {

    switch (action.type) {
        case FORM_PROJECT:
            return {
                ...state,
                newProject: true,
            };

        case GET_ALL_PROJECTS:
            return {
                ...state,
                projects: action.payload
            };

        case ADD_PROJECT:
            return {
                ...state,
                projects: [
                    action.payload,
                    ...state.projects
                    
                ],
                newProject: false,
                errorFromAddProject: false,
            };

        case VALID_FORM_ADD_PROJECT:
            return {
                ...state,
                errorFromAddProject: true,
            };

        case ACTIVE_PROJECT:
            return {
                ...state,
                project: state.projects.filter( project => project.id === action.payload )
            };

        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter( project => project.id !== action.payload),
                project: null,
                msg: null
            };

        case ERROR_PROJECT:
            return {
                ...state,
                msg: action.payload
            };

        default:
            return state;
    }

}

export default ProjectReducer;