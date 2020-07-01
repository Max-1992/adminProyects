// Native React
import React, { useReducer } from 'react';

// Context
import AuthContext from './authContext';

// Reducer
import AuthReducer from './authReducer';

// Types
import { SIGNUP_SUCCESS, SIGNUP_ERROR, GET_USER, LOGIN_SUCCESS, LOGIN_ERROR, LOGAUT } from '../../types';

// Services
import clientAxios from '../../services/axios';
import authToken from '../../services/authToken';


// Create State
const AuthState = props => {

    // Declare Inital State
    const initialState = {
        token: localStorage.getItem('token'),
        auth: null,
        user: null,
        msg: null,
        load: true,
    }

    // Declare Dispatch Actions
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    // Method Actions

    // Create a new user.
    const addUser = async (newUser) => {

        try {

            const res = await clientAxios.post('api/user', newUser);

            // Get the token from the response headers.
            const token = res.headers.authorization;

            dispatch({
                type: SIGNUP_SUCCESS,
                payload: token
            });

            authUser();
            
        } catch (error) {

            const alert = {
                msg: error.response.data.error,
                category: 'alerta-error'
            };

            dispatch({
                type: SIGNUP_ERROR,
                payload: alert
            });

            authUser();
        }

    };

    // Request the data of a user.
    const authUser = async () => {
        const token = localStorage.getItem('token');

        // Verify that a token exists.
        if(token) {
            // Set up token in request headers.
            authToken(token);
        };

        try {

            const res = await clientAxios.get('/api/user');

            dispatch({
                type: GET_USER,
                payload: res.data.data
            })
            
        } catch (error) {
            
            const alert = {
                msg: error.response.data.error,
                category: 'alerta-error'
            };

            dispatch({
                type: LOGIN_ERROR,
                payload: alert
            });

        }
    }

    // User authentication.
    const login = async (user) => {
        try {
            
            const res = await clientAxios.post('/api/auth', user);

             // Get the token from the response headers.
             const token = res.headers.authorization;

            dispatch({
                type: LOGIN_SUCCESS,
                payload: token
            });



        } catch (error) {

            const alert = {
                msg: error.response.data.error,
                category: 'alerta-error'
            };

            dispatch({
                type: LOGIN_ERROR,
                payload: alert
            });

        }
    }

    const logaut = () => {
        dispatch({
            type: LOGAUT
        });
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                auth: state.auth,
                user: state.user,
                msg: state.msg,
                load: state.load,
                addUser,
                authUser,
                login,
                logaut
          }}
        >
            { props.children }
        </AuthContext.Provider>
    )
};


export default AuthState;