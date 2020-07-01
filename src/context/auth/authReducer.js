import { SIGNUP_SUCCESS, SIGNUP_ERROR, GET_USER, LOGIN_SUCCESS, LOGIN_ERROR, LOGAUT } from '../../types';

const AuthReducer = ( state, action ) => {

    switch (action.type) {
        case SIGNUP_SUCCESS:
            localStorage.setItem('token', action.payload);
            return {
                ...state,
                auth: true,
                msg: null ,
                load: false
            }

        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload);
            return {
                ...state,
                auth: true,
                msg: null,
                load: false
            }

        case GET_USER:
            return {
                ...state,
                auth: true,
                user: action.payload,
                load: false
            }

        case SIGNUP_ERROR:
            // localStorage.removeItem('token');
            return {
                ...state,
                auth: false,
                msg: action.payload,
                load: false
            }

        case LOGIN_ERROR:
           // localStorage.removeItem('token');
            return {
                ...state,
                auth: false,
                msg: action.payload,
                load: false
            }

        case LOGAUT:
            localStorage.removeItem('token');
            return {
                ...state,
                auth: null,
                msg: null,
                user: null,
                load: false
            }
    
        default:
            return state;
    }

}

export default AuthReducer;