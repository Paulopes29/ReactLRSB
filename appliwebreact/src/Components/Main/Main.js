import React from "react";
import {Route, Routes} from "react-router-dom";
import Accueil from "../Accueil/Accueil";
import LoginPage from "../Login/Login";
import Style from "./Main.module.css"
import Country from "../CountryComponent/Country";

const Main = () => {

    return(
        <section className={Style.ext}>
            <div className={Style.MainCss}>
                <Routes>
                    <Route path="/" element={<Accueil/>}/>*/}
                    <Route path="/Login" element={<LoginPage/>}/>
                    <Route path="/Country" element={<Country/>}/>
                </Routes>
            </div>
        </section>
    )
}
export default  Main;
