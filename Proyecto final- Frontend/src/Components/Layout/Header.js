import React from "react";
import './Header.css';

const Header = (props) => {
    return (
        <header style={{
            backgroundImage: props.fondo ? `url(${props.fondo})` : null,
            backgroundSize: props.fondo ? 'cover' : null
        }}>
            <div className="holder">
                <div className="foto" >
                    {props.children}
                </div>
            </div>
        </header>
        
    );
}
export default Header;
