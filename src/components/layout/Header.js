// Native React
import React, { useContext } from 'react';

// Require Context
import AuthContext from '../../context/auth/authContext';

const Header = () => {

    // Declare State access your Context
    const authContext = useContext(AuthContext);

    // Subtract State Properties
    const { user, logaut } = authContext;

    const handlerLogaut = () => {
        logaut();
    }

    return ( 
        <header className="app-header">
            { user ? 
                <p className="nombre-usuario">
                    Hola <span> { user.name } </span>
                </p>
            :
                null
        
            }
            <nav className="nav-principal">
                <button 
                    className="btn btn-blank" 
                    style={{color:'#fff'}}
                    onClick={handlerLogaut}
                >
                    Cerrar Sesión
                </button>
            </nav>
        </header>
     );
}
 
export default Header;