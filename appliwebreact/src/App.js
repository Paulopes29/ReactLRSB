import * as React from "react";
import SideBarTest from "./Components/SideBar/SideBar"
import tableRoutes from "./Components/Routes/Routes"
import Navbar from "./Components/NavBar/Navbar"
import Main from "./Components/Main/Main";

function App() {
    return (
        <div className="App">
            {/*
            Liste des Routes
            */}
            <SideBarTest routes={tableRoutes}/>
            <Navbar/>
            <Main/>
        </div>
    );
}

export default App;
