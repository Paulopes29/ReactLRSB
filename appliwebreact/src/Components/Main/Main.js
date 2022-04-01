import React from "react";
import {Route, Routes} from "react-router-dom";
import Accueil from "../Accueil/Accueil";
import LoginPage from "../Login/Login";
import Country from "../CountryComponent/Country";
import MeteoParVille from "../MeteoByVille/MeteoParVille";
import Card from "../Card/Card";
import MeteoPage from "../Meteo/MeteoPage";
import styleCard from "../Card/Card.module.css";

const Main = () => {

    return (
        <Card className={styleCard.main}>
            <Routes>
                <Route path="/" element={<Accueil/>}/>/}
                <Route path="/Login" element={<LoginPage/>}/>
                <Route path="/Country" element={<Country/>}/>
                <Route path="/MeteoParVille" element={<MeteoParVille/>}/>
                <Route path="/Test" element={<MeteoPage/>}/>
            </Routes>
        </Card>

    )
}
export default Main;
