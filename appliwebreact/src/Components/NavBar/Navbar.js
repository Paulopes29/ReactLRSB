import React from 'react'
import '@blueprintjs/core/lib/css/blueprint.css';
import style from "./Navbar.module.css"

function NavbarBP() {
    return (
        <div className={style.navBarContainer}>
            <nav className="bp4-navbar bp4-dark background">
                <div className="bp4-navbar-group bp4-align-left">
                    <div className="bp4-navbar-heading">Station Météo</div>
                </div>
                <div className="bp4-navbar-group bp4-align-right">
                    <button className="bp4-button bp4-minimal bp4-icon-log-in">Login</button>
                </div>
            </nav>
        </div>
        // <div className={style.navBarContainer}>
        //     <Navbar>
        //         <NavbarGroup align={'right'} className={style.navBarContent}>
        //             <NavbarHeading>Météo</NavbarHeading>
        //             <NavbarDivider />
        //             <Button icon="home" text="Home" />
        //             <Button icon="log-in" text="Login" />
        //             <Button icon="add" text="Suscribe" />
        //         </NavbarGroup>
        //     </Navbar>
        // </div>
    );
}

export default NavbarBP;
