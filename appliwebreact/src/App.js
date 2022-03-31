import * as React from "react";
import { Route, Routes, } from "react-router-dom";
import TestRoute from "./Components/test"
import SideBarTest from "./Components/SideBar/SideBar"
import tableRoutes from "./Components/Routes/Routes"
import Navbar from "./Components/NavBar/Navbar"
import Accueil from './Components/Accueil/Accueil.js'
import LoginPage from "./Components/Login/Login";
import Main from "./Components/Main/Main";
import Crypto from './Components/HSCompo/Crypto'

function App() {
    return (
        /*<div className="App">
            
            Liste des Routes
            

            {<SideBarTest routes={tableRoutes}/>}

{<Navbar/>}
<div>
    {<Main/>}*/
        <div> 
           <Crypto /> 
        </div>
    );

}



export default App;

