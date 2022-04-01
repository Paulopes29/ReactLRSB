//useState
import React, {useState} from "react";

//import components
import {Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader} from "react-pro-sidebar";

//import icons disponibles depuis react
import {FiArrowLeftCircle, FiArrowRightCircle} from "react-icons/fi";
import "react-pro-sidebar/dist/css/styles.css";
import style from "./SideBar.module.css";
import "./SideBar.module.css";
import {NavLink} from "react-router-dom";


const SideBar = ({routes}) => {
    //use state pour agrandir et reduire la sidebar
    const [menuCollapse, setMenuCollapse] = useState(false)

    //Reduire ou agrandir la side bar au clique
    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    return (
        <>
            <div className={style.Display}>
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader className={style.SideBar}>
                        <div className={style.closemenu} onClick={menuIconClick}>
                            {menuCollapse ? (
                                <FiArrowRightCircle/>
                            ) : (
                                <FiArrowLeftCircle/>
                            )}
                        </div>
                        <br/><br/>
                        {/*<div className={style.logotext}>*/}

                        {/*    <p>{menuCollapse ? "Météo" : "Station météo"}</p>*/}
                        {/*</div>*/}
                    </SidebarHeader>
                    <br/> <br/>
                    <SidebarContent>
                        <Menu className={style.proSidebar} iconShape="square">
                            {
                                routes.map((route) => {
                                    return <MenuItem active= {route.actif} icon={route.icon}>
                                        <NavLink to={route.layout + route.path}>
                                            {route.name}
                                        </NavLink>
                                    </MenuItem>
                                })
                            }
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        {/*<Menu iconShape="square">*/}
                        {/*    <MenuItem icon={<FiLogOut />}>Logout</MenuItem>*/}
                        {/*</Menu>*/}
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};

export default SideBar;
