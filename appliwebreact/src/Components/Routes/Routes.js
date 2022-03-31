import LoginPage from "../Login/Login";
import { FiHome} from "react-icons/fi";
import {FaList} from "react-icons/fa";
import React from "react";
import Country from "../CountryComponent/Country";

//Liste des routes disponibles pour les afficher dans la sideBar
const RoutesSideBar = [
    {
        visible:true,
        path: "/",
        name: "Accueil",
        icon: <FiHome />,
        component: LoginPage,
        layout: "",
        actif: true
    },
    {
        visible:true,
        path: "/Login",
        name: "Login",
        icon: <FiHome />,
        component: LoginPage,
        layout: "",
        actif: false
    },
    {
        visible:true,
        path: "/Country",
        name: "ville",
        icon: <FaList />,
        component: Country,
        layout: "",
        actif: false
    }
];
export default RoutesSideBar;
