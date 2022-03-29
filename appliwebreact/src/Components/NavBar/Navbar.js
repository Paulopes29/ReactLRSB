import React from 'react'
import '@blueprintjs/core/lib/css/blueprint.css';
import {
    Navbar, NavbarHeading, NavbarGroup,
    NavbarDivider, Button
} from "@blueprintjs/core";
import style from './Navbar.module.css'

function NavbarBP() {
    return (
        <div className={style.navBarContainer}>
            <Navbar>
                <NavbarGroup align={'right'} className={style.navBarContent}>
                    <NavbarHeading>Météo</NavbarHeading>
                    <NavbarDivider />
                    <Button icon="home" text="Home" />
                    <Button icon="log-in" text="Login" />
                    <Button icon="add" text="Suscribe" />
                </NavbarGroup>
            </Navbar>
        </div>
    );
}

export default NavbarBP;
