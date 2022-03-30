import React from "react";
import {Route, Routes} from "react-router-dom";
import Accueil from "../Accueil/Accueil";
import TestRoute from "../test";
import LoginPage from "../Login/Login";
import Country from "../CountryComponent/Country";

const Main = (props) => {

    return(
        <div>
            <Routes>
                <Route path="/" element={<Accueil/>}/>*/}
                <Route path="/Test" element={<TestRoute/>}/>
                <Route path="/Login" element={<LoginPage/>}/>
                <Route path="/Country" element={<Country/>}/>
            </Routes>
        </div>
    )
}
export default  Main;
