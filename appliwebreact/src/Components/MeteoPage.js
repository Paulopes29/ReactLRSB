import './App.css';
import React, { useEffect, useState } from "react";
import Meteo from './Components/Meteo';
export default function App() {

    //Latitude
    const [latitude, setLatitude] = useState([]);
    //Longitude
    const [longitude, setLongitude] = useState([]);
    //Donnees obtenues avec API grace a LAT et LONG
    const [data, setData] = useState([]);
    //Donnees obtenues pour les prochains jours avec API grace a LAT et LONG
    const [dataNextDay, setDataNextDay] = useState([]);


    //Petite fonction pour obtenir la latitude et la longitude
    function getLatitudeLongitude(){
        navigator.geolocation.getCurrentPosition(function(position) {
            //Ici on récupère les données et on les ajoute dans les tableaux correspondants
            //Latitude
            setLatitude(position.coords.latitude);
            //Longitude
            setLongitude(position.coords.longitude);
        });
    }

    useEffect(() => {
        const fetchData = async () => {
            //On fait app
            getLatitudeLongitude();
            await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${latitude}&lon=${longitude}&units=metric&lang=fr&APPID=1af08637b28864881793396435823894`)
                .then(res => res.json())
                .then(result => {
                    setData(result)
                    console.log("Meteo du jour ")
                    console.log(result);
                });
        }
        fetchData();
    }, [latitude,longitude])

    return (
        <div className="App">
            {(typeof data.main != 'undefined') ? (
                <Meteo meteoData={data}/>
            ): (
                <div></div>
            )}

        </div>
    );
}