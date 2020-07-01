// Native React
import React, { useState } from 'react';

// React Router
import { Link } from 'react-router-dom';

const Login = () => {

    // Create State
    const initilaStateUser = {
        email: '',
        password: ''
    }
    const [ user, setUser ] = useState(initilaStateUser);

    // Subtract State Properties
    const { email, password } = user;

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

        // Run login

    };

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1> Iniciar Sesión </h1>

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