import LoginPage from "../Login/Login";
import TestRoute from "../test"

//Liste des routes disponibles pour les afficher dans la sideBar
const RoutesSideBar = [
    {
        visible:true,
        path: "/",
        name: "Login",
        icon: "fas fa-file-contract",
        component: LoginPage,
        layout: ""
    },
    {
        visible:true,
        path: "/Test",
        name: "Test",
        icon: "fas fa-file-contract",
        component: TestRoute,
        layout: ""
    }
];
export default RoutesSideBar;