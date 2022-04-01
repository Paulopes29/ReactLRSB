import React from "react";
import {Route, Routes} from "react-router-dom";
import Accueil from "../Accueil/Accueil";
import TestRoute from "../test";
import LoginPage from "../Login/Login";
import Style from "./Main.module.css"
import Country from "../CountryComponent/Country";
import Meteo from "../Meteo/MeteoPage";
import News from "../News/News";
import NewsPages from "../News/NewsPages";
import Cryptos from '../HSCompo/Crypto';

const Main = () => {

    return(

        <section className={Style.ext}>
            <div className={Style.MainCss}>
                <Routes>
                    <Route path="/" element={<Accueil/>}/>*/}
                    <Route path="/Test" element={<TestRoute/>}/>
                    <Route path="/Login" element={<LoginPage/>}/>
                    <Route path="/Country" element={<Country/>}/>
                    <Route path="/Meteo" element={<Meteo/>}/>
                    <Route path="/News" element={<NewsPages/>}/>
                    <Route path="/Cryptos" element={<Cryptos/>}/>
                </Routes>
            </div>
        </section>
    )
}
export default  Main;
