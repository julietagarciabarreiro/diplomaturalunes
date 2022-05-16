import React from "react";
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
            <ul>
                <li><Link to="/index">Inicio</Link></li>
                <li><Link to="/biografia">Biografía</Link></li>
                <li><Link to="/discografia">Discografía</Link></li>
                <li><Link to="/novedades">Novedades</Link></li>
                <li><Link to="/redesycontacto">Redes y Contacto</Link></li>
            </ul>
            </div>
        </nav>
        
    );
}
export default Nav;