import './App.css';
import * as React from "react";
import {Route, Routes, } from "react-router-dom";
import LoginPage from "./Components/Login/Login";
import TestRoute from "./Components/test"
import routesTest from "./Components/Routes/Routes"
import SideBar from "./Components/SideBar/SideBar"

function App() {
    return (
        <div className="App">
            {/*
            Liste des Routes

            */}
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/Test" element={<TestRoute/>}/>
            </Routes>
            {
                /*
                Récuperation et affichage des routes depuis mon tableau pour les afficher dans la sideBar
                 */
                routesTest.map((route,index) => {
                    return <SideBar route={route}/>
                })
            }
        </div>
    );
}

export default App;
