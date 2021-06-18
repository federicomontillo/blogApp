import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import AuthContext from '../../context/autenticacion/authContext';

export const Navbar = () => {

    //Extraer valores del context
    const authContext = useContext(AuthContext);
    const { cerrarSesion } = authContext;

    return (
        <nav className="navbar navbar-expand-sm fixed-top navbar-light nav-style">
            <div className="container-fluid">
                <Link 
                    className="font-brand navbar-brand" 
                    to="/"
                >
                    <i className="fas fa-blog brand"> </i> blogApp
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                            <NavLink 
                                activeClassName="active"
                                className="nav-item nav-link text-center pt-4" 
                                exact
                                to="/"
                            >
                                Home
                            </NavLink>

                            <NavLink 
                                activeClassName="active"
                                className="nav-item nav-link text-center pt-4" 
                                exact
                                to="/edicion"
                            >
                                Formulario de Edición
                            </NavLink>

                            <NavLink 
                                activeClassName="active"
                                className="nav-item link-danger text-center p-4" 
                                exact
                                to="/"
                                onClick={ () => cerrarSesion() }
                                >
                                Logout
                            </NavLink>  
                    </div>           
                </div>
            </div>
    </nav>
    )
}