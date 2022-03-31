import LoginPage from "../Login/Login";
import { FiHome} from "react-icons/fi";
import {FaCity, FaSun} from "react-icons/fa";
import React from "react";
import Country from "../CountryComponent/Country";

//Liste des routes disponibles pour les afficher dans la sideBar
const RoutesSideBar = [
    {
        visible:true,
        path: "/",
        name: "Accueil",
        icon: <FiHome />,
        layout: ""
    },
    {
        visible:true,
        path: "/Login",
        name: "Login",
        icon: <FiHome />,
        layout: ""
    },
    {
        visible:true,
        path: "/Country",
        name: "ville",
        icon: <FaCity />,
        layout: ""
    },
    {
        visible:true,
        path: "/MeteoParVille",
        name: "Méteo des villes",
        icon: <FaSun />,
        layout: ""
    },
    {
        visible:true,
        path: "/Test",
        name: "Méteo des villes",
        icon: <FaSun />,
        layout: ""
    }
];
export default RoutesSideBar;
