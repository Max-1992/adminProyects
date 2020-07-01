// Native React
import React, { useState, useContext, useEffect } from 'react';

// React Router
import { Link } from 'react-router-dom';

// Require Context
import AlertContext from '../../../context/alert/alertContext';
import AuthContext from '../../../context/auth/authContext';

const Login = ({ history }) => {

     // Declare State access your Context
     const authContext = useContext(AuthContext);

     // Subtract State Properties
     const { auth, msg, login } = authContext;
 
     // Declare State access your Context
     const alertContext = useContext(AlertContext);
 
     // Subtract State Properties
     const { alert, showAlert, hideAlert } = alertContext;
 

    // Create State
    const initilaStateUser = {
        email: '',
        password: ''
    }
    const [ user, setUser ] = useState(initilaStateUser);

    // Subtract State Properties
    const { email, password } = user;

    // UseEffect
    useEffect(() => {

        if(auth) history.push('/projects');

        if(msg) showAlert(msg.msg, msg.category);
        
        // eslint-disable-next-line
    }, [msg, auth, history])

    // HandleChange
    const handleChange = e => {

        setUser({ ...user,
            [e.target.name] : e.target.value
        });

    };

    // HandleSubmite
    const handleSubmit = e => {

        // Prevent default behavior
        e.preventDefault();

        // Fields Validate
        if( !email ) {
            let message = {
                msg: `El email es requerido.`,
                category: `alerta-error`
            };

            return showAlert(message.msg, message.category);
        };

        if( !password ) {
            let message = {
                msg: `El password es requerido.`,
                category: `alerta-error`
            };

            return showAlert(message.msg, message.category);
        };

         // Clean alert.
         hideAlert();

         // Create User
        const user = {
            email,
            password
        };

        // Run login
        login(user);

    };

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1> Iniciar Sesión </h1>

                { alert ? (<div className={`alerta ${alert.category}`}> { alert.msg } </div>) : null }

                <form onSubmit={handleSubmit}>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="ejemplo@email.com"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="******"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesión"
                        />
                    </div>
                </form>
                <Link to={'/signup'} className="enlace-cuenta">
                    Crear una cuenta
                </Link>
            </div>
            
        </div>
     );
}
 
export default Login;