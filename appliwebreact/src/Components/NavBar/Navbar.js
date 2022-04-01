import React from 'react'
import '@blueprintjs/core/lib/css/blueprint.css';
import style from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

function NavbarBP() {

    return (
        <div className={style.navBarContainer}>
            <nav className="bp4-navbar bp4-dark background">
                <div className="bp4-navbar-group bp4-align-left">
                    <div className="bp4-navbar-heading">Station Météo</div>
                </div>
                <div className="bp4-navbar-group bp4-align-right">
                    <NavLink to='/Login'>
                        <button className="bp4-button bp4-minimal bp4-icon-log-in">Login</button>
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}

export default NavbarBP;
