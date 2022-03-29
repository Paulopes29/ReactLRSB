import React from "react";
import style from "./SideBar.module.css"
import {NavLink} from "react-router-dom";

function Sidebar({route}) {
    return (
        <ul className={style.SideBarCss}>
            <li>
                <NavLink to={route.layout + route.path}>
                    <i className={route.icon} />
                    <p>{route.name}</p>
                </NavLink>
            </li>
        </ul>
    )
}

export default Sidebar