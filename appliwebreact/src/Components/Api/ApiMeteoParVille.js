import axios from "axios";

//Declaration des constantes utilisés pour accéder a l'api
const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "21b17ce1518a5be6b1097495053cb5eb";

//requete pour récuperer les data
export const fetchMeteo = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: "metric",
            APPID: API_KEY,
        },
    });
    // ce console log m'a permis de connaitre le nom des champs qui stockent les data
    console.log("meteo",data);
    return data;
};
