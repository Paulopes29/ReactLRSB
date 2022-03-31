import LoginPage from "../Login/Login";
import TestRoute from "../test"
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
        path: "/Test",
        name: "Test",
        icon: <FaList />,
        component: TestRoute,
        layout: "",
        actif: false
    },
    {
        visible:true,
        path: "/Country",
        name: "Ville",
        icon: <FaList />,
        component: Country,
        layout: "",
        actif: false
    }
];
export default RoutesSideBar;
