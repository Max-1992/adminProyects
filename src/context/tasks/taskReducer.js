import { GET_ALL_TASKS, ADD_TASK, VALID_FORM_ADD_TASK, DELETE_TASK, ACTIVE_TASK, UPDATE_TASK } from '../../types';

const TaskReducer = ( state, action ) => {

    switch (action.type) {

        case GET_ALL_TASKS:
            return { ...state,
                projectTasks: action.payload
            }

        case ADD_TASK:
            return { ...state,
                projectTasks: [ action.payload, ...state.projectTasks],
                errorFromAddTasks: false
            }

        case VALID_FORM_ADD_TASK:
            return { ...state,
                errorFromAddTasks: true
            }

        case DELETE_TASK:
            return { ...state,
                projectTasks: state.projectTasks.filter( task => task.id !== action.payload )
            }

        case UPDATE_TASK:
            return { ...state,
                projectTasks: state.projectTasks.map( task => task.id === action.payload.id ? action.payload : task ) ,
                taskSelected: null
            }


        case ACTIVE_TASK:
            return { ...state,
                taskSelected: action.payload
            }
    
        default:
            return state;
    }

}

export default TaskReducer;