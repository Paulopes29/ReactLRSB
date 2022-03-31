import * as React from "react";
import SideBarTest from "./Components/SideBar/SideBar"
import tableRoutes from "./Components/Routes/Routes"
import Navbar from "./Components/NavBar/Navbar"
import Main from "./Components/Main/Main";
import Crypto from './Components/HSCompo/Crypto'

function App() {
    return (
        <div className="App">
            {/*
            Liste des Routes
            */}

            <SideBarTest routes={tableRoutes}/>
            <Navbar/>
            <div style={{marginLeft: "270px",height: "100vh"}}>
                <Main/>
            </div>
        </div>
    );

}

export default App;
