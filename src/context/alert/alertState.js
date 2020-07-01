// Native React
import React, { useReducer } from 'react';

// Context
import AlertContext from './alertContext';

// Reducer
import AlertReducer from './alertReducer';

// Types
import { SHOW_ALERT, HIDE_ALERT } from '../../types';


// Create State
const AlertState = props => {

    // Declare Inital State
    const initialState = {
        alert: null
    }

    // Declare Dispatch Actions
    const [state, dispatch] = useReducer(AlertReducer, initialState);

    // Method Actions
    const showAlert = (msg, category) => {
        dispatch({
            type: SHOW_ALERT,
            payload: {
                msg,
                category
            }
        })
    };

    const hideAlert = () => {
        dispatch({
            type: HIDE_ALERT,
        })
    };


    return (
        <AlertContext.Provider
            value={{
                alert: state.alert,
                showAlert,
                hideAlert
          }}
        >
            { props.children }
        </AlertContext.Provider>
    )
}

export default AlertState;