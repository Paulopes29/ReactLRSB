import { FiHome} from "react-icons/fi";
import {FaCity, FaList, FaSun} from "react-icons/fa";
import React from "react";

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
        name: "Ville",
        icon: <FaCity />,
        layout: "",
    },
    {
        path: "/MeteoParVille",
        name: "Méteo des villes",
        icon: <FaSun />,
        layout: ""
    },
    {
        visible:true,
        path: "/Test",
        name: "Localisation météo",
        icon: <FaSun />,
        layout: ""
    }
];
export default RoutesSideBar;
