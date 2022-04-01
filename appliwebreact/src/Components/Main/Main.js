import React from "react";
import {Route, Routes} from "react-router-dom";
import Accueil from "../Accueil/Accueil";
import LoginPage from "../Login/Login";
import Country from "../CountryComponent/Country";
import Meteo from "../Meteo/MeteoPage";
import News from "../News/NewsPages";
import NewsPages from "../News/NewsPages";
import Cryptos from '../HSCompo/Crypto';
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
                <Route path="/Cryptos" element={<Cryptos/>}/>
                <Route path="/News" element={<News/>}/>
            </Routes>
        </Card>

    )
}
export default Main;
