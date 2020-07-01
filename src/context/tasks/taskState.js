// Native React
import React, { useReducer } from 'react';

// Context
import TaskContext from './taskContext';

// Reducer
import TaskReducer from './taskReducer';

// Types
import { GET_ALL_TASKS, ADD_TASK, VALID_FORM_ADD_TASK, DELETE_TASK, ACTIVE_TASK, UPDATE_TASK } from '../../types';

// Services
import clientAxios from '../../services/axios';
import authToken from '../../services/authToken';

// Create State
const TaskState = props => {

    // Declare Inital State
    const initialState = {
        newTask: false,
        errorFromAddTasks: false,
        projectTasks: [],
        taskSelected: null,
    }

    // Declare Dispatch Actions
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    // Method Actions
    const getAllTasks = async (projectId) => {

        // Get token localStorage.
        const token = localStorage.getItem('token');

        // Verify that a token exists.
        if(token) {
            // Set up token in request headers.
            authToken(token);
        };

        try {

            const res = await clientAxios.get(`/api/task/${projectId}`);

            dispatch({
                type: GET_ALL_TASKS,
                payload: res.data.data.tasks
            });
            
        } catch (error) {
            console.log(error);
        }

        
    }

    const addTask = async (task) => {

          // Get token localStorage.
          const token = localStorage.getItem('token');

          // Verify that a token exists.
          if(token) {
              // Set up token in request headers.
              authToken(token);
          };

        try {

            const res = await clientAxios.post('/api/task/', task);

            dispatch({
                type: ADD_TASK,
                payload: res.data.data
            });
            
        } catch (error) {
            console.log(error);
        }   

    }

    const showErrorFromAddTask = () => {
        dispatch({
            type: VALID_FORM_ADD_TASK,
        })
    }

    const deleteTask = async (taskId) => {

        // Get token localStorage.
        const token = localStorage.getItem('token');

        // Verify that a token exists.
        if(token) {
            // Set up token in request headers.
            authToken(token);
        };

        try {

            await clientAxios.delete(`/api/task/${taskId}`);

            dispatch({
                type: DELETE_TASK,
                payload: taskId
            });
            
        } catch (error) {
            console.log(error);
        }

    }

    const taskActive = task => {
        dispatch({
            type: ACTIVE_TASK,
            payload: task
        })
    }

    const updateTask = async (task) => {

        // Get token localStorage.
        const token = localStorage.getItem('token');

        // Verify that a token exists.
        if(token) {
            // Set up token in request headers.
            authToken(token);
        };

        try {

            const res = await clientAxios.put(`/api/task/${task.id}`, task);

            dispatch({
                type: UPDATE_TASK,
                payload: res.data.data
            });
            
        } catch (error) {
            console.log(error);
        }

    
    }


    return (
        <TaskContext.Provider
            value={{
                newTask: state.newTask,
                errorFromAddTasks: state.errorFromAddTasks,
                projectTasks: state.projectTasks,
                taskSelected: state.taskSelected,
                getAllTasks,
                addTask,
                showErrorFromAddTask,
                deleteTask,
                taskActive,
                updateTask
            }}
        >
            { props.children }
        </TaskContext.Provider>
    )
}

export default TaskState;