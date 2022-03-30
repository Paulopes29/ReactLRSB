import React from "react";
import {Route, Routes} from "react-router-dom";
import Accueil from "../Accueil";
import TestRoute from "../test";
import LoginPage from "../Login/Login";
import Style from "./Main.module.css"

const Main = () => {

    return(
        <section className={Style.ext}>
            <div className={Style.MainCss}>
                <Routes>
                    <Route path="/" element={<Accueil/>}/>*/}
                    <Route path="/Test" element={<TestRoute/>}/>
                    <Route path="/Login" element={<LoginPage/>}/>
                </Routes>
            </div>
        </section>

    )
}
export default  Main;
