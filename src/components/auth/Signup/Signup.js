// Native React
import React, { useState, useContext, useEffect } from 'react';

// Require Context
import AlertContext from '../../../context/alert/alertContext';
import AuthContext from '../../../context/auth/authContext';

// React Router
import { Link } from 'react-router-dom';

const Signup = ({ history }) => {

    // Declare State access your Context
    const authContext = useContext(AuthContext);

    // Subtract State Properties
    const { auth, msg, addUser } = authContext;

    // Declare State access your Context
    const alertContext = useContext(AlertContext);

    // Subtract State Properties
    const { alert, showAlert, hideAlert } = alertContext;

    // Create State
    const initilaStateUser = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    const [ user, setUser ] = useState(initilaStateUser);

    // Subtract State Properties
    const { name, email, password, confirmPassword } = user;

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
        if( !name ) {
            let message = {
                msg: `El nombre es requerido.`,
                category: `alerta-error`
            };

            return showAlert(message.msg, message.category);
        };

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

        if( !confirmPassword ) {
            let message = {
                msg: `Debe confiramar su contraseña.`,
                category: `alerta-error`
            };

            return showAlert(message.msg, message.category);
        };

        // Password min 6 characters.
        if( password.length < 6 ) {
            let message = {
                msg: `El password debe contener mínimo 6 carácteres.`,
                category: `alerta-error`
            };

            return showAlert(message.msg, message.category);
        };

        // Passwords are not the equals..
        if( password !== confirmPassword ) {
            let message = {
                msg: `Las contraseñas no coinciden.`,
                category: `alerta-error`
            };

            return showAlert(message.msg, message.category);
        }

        // Clean alert.
        hideAlert();

        // Create User
        const newUser = {
            name,
            email,
            password
        };

        // Run SignUp
        addUser(newUser);

    };

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1> Registrarse </h1>

                { alert ? (<div className={`alerta ${alert.category}`}> { alert.msg } </div>) : null }

                <form onSubmit={handleSubmit}>
                    <div className="campo-form">
                        <label htmlFor="name">Nombre</label>
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Manuel"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="ejemplo@email.com"
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
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                        <input 
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="******"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrarme"
                        />
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Iniciar Sesión
                </Link>
            </div>
        </div>
     );
}
 
export default Signup;