// Native React
import React, { useState } from 'react';

// React Router
import { Link } from 'react-router-dom';

const Signup = () => {
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

        // Run SignUp

    };

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1> Registrarse </h1>

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