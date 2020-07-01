// Native React
import React, { useContext, useEffect } from 'react';

// Routing 
import { Route, Redirect } from 'react-router-dom';

// Require Context
import AuthContext from '../context/auth/authContext';

const AuthGuard = ({ component: Component, ...props }) => {

    // Declare State access your Context
    const authContext = useContext(AuthContext);

    // Subtract State Properties
    const { auth, load, authUser } = authContext;

    useEffect(() => {
        authUser();

        // eslint-disable-next-line
    }, []);

    return (
        <Route { ...props } render={ props => !auth && !load ? 
        (
            <Redirect to="/" />
        ) : 
        (
            <Component { ...props } />
        )}
        
        />
    )

}

export default AuthGuard;
