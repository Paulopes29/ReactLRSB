import { FiHome} from "react-icons/fi";
import {FaCity, FaList, FaSun} from "react-icons/fa";
import React from "react";

import Country from "../CountryComponent/Country";
import Meteo from "../Meteo/MeteoPage";
import News from "../News/NewsPages";
import Cryptos from '../HSCompo/Crypto';


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
    ,
    {
        visible:true,
        path: "/Cryptos",
        name: "Cryptos",
        icon: <FaList />,
        layout: "",
    }
];
export default RoutesSideBar;
