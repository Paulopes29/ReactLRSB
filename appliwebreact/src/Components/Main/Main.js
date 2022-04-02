import React from "react";
import {Route, Routes} from "react-router-dom";
import Accueil from "../Accueil/Accueil";
import LoginPage from "../Login/Login";
import Country from "../CountryComponent/Country";
import MeteoPage from "../Meteo/MeteoPage";
import Cryptos from '../HSCompo/Crypto';
import MeteoParVille from "../MeteoByVille/MeteoParVille";
import Card from "../Card/Card";
import styleCard from "../Card/Card.module.css";
import {MenuCollapseProvider} from "../Store/Store";

//component crée pour faciliter l'affichage des differentes views
const Main = () => {
    return (
        <Card className={styleCard.main}>
            {/*La balise provider permet de donner accés au store dans toute l'app*/}
            <MenuCollapseProvider>
                {/*Ici nous avons tous les chemins pour afficher une view en fonction du chemin*/}
                <Routes>
                    <Route path="/" element={<Accueil/>}/>/}
                    <Route path="/Login" element={<LoginPage/>}/>
                    <Route path="/Country" element={<Country/>}/>
                    <Route path="/MeteoParVille" element={<MeteoParVille/>}/>
                    <Route path="/Test" element={<MeteoPage/>}/>
                    <Route path="/Cryptos" element={<Cryptos/>}/>
                </Routes>
            </MenuCollapseProvider>

        </Card>

    )
}
export default Main;
