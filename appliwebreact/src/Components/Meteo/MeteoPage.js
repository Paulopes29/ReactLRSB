import React, {useEffect, useState} from 'react';
import meteoCSS from './Components/Meteo.component.css';

// Creation d'une fonction qui va interroger API meteo
function useMeteoAPI ({apiKey, latitude, longitude, unite = 'metric'}) {
    //Definition de data, setData et de API url
    const [data, setData] = useState(null);
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&lang=fr&appid=${apiKey}&units=${unite}`;

    // Utilisation de useEffect, j'affiche dans console.log les données renvoyées par l'API
    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data);
            });
    }, [apiUrl]);
    return data;
}


// Fonction Meteo qui utilise la fonction useMeteoAPI avec l'API Key en params, latitude, longitude et l'unité (metre, ...)
function Meteo ({}) {
    const meteo = useMeteoAPI({
        apiKey: 'c9f537b79dd1d68d847b5d1927b66364',
        latitude: 45.7802,
        longitude: 3.0736,
        unite: 'imperial'
    });

    // Ici je définis de nombreuses fois la date. Je dois obtenir la date du jour jusqu'à J+3
    const date = new Date();
    const dateJJ = new Date();
    const nomDuJour = {weekday: "long"};
    const dateDuJour = {year: "numeric", month: "long", day: "2-digit"};
    const dateDuJourMajuscule = date.toLocaleDateString('fr-FR', nomDuJour).toUpperCase()
    date.setDate(date.getDate() + 1);
    const jourPlus1 = date.toLocaleDateString('fr-FR', nomDuJour).toUpperCase().substring(0,3)
    date.setDate(date.getDate() + 1);
    const jourPlus2 = date.toLocaleDateString('fr-FR', nomDuJour).toUpperCase().substring(0,3)
    date.setDate(date.getDate() + 1);
    const jourPlus3 = date.toLocaleDateString('fr-FR', nomDuJour).toUpperCase().substring(0,3)


    //Ici on récupère les données qui nous intéressent : la température jusqu'à J+3 && l'humidité du jour J && la vitesse du vent jour J && description meteo jour J
    const tempJours = meteo && meteo.daily.slice(0, 5).map((d) => parseFloat(((d.temp.max-32)*(5/9))).toString().substring(0,4));
    const humiditeJours = meteo && meteo.daily.slice(0, 1).map((d) => parseFloat((d.humidity)).toString().substring(0,1));
    const ventJours = meteo && meteo.daily.slice(0, 1).map((d) => parseFloat((d.wind_speed)).toString().substring(0,1));
    const descriptionMeteo = meteo && meteo.daily.slice(0, 1).map((d) => (d.weather[0].description));

    // Définition des variables jour J jusqu'à J+3
    let j0 = 0;
    let j1 = 0;
    let j2 = 0;
    let j3 = 0;
    // Definition humidité jour J, vitese vent jour J, description meteo jour J
    let humiditeJour1 = 0;
    let ventJour1 = 0;
    let descMeteo = "";
    // Si les resultats retournés par l'API ne sont pas nuls, on assigne les valeurs
    if(tempJours !== null && humiditeJours !== null && ventJours !== null && descriptionMeteo !== null){
        j0 = tempJours[0];
        j1 = tempJours[1];
        j2 = tempJours[2];
        j3 = tempJours[3];
        humiditeJour1 = humiditeJours[0];
        ventJour1 = ventJours[0];
        descMeteo = descriptionMeteo[0];
    }
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="container">

                <div className="weather-side">
                    <div className="weather-gradient"></div>
                    <div className="date-container">
                        <h2 className="date-dayname">{dateDuJourMajuscule}</h2>
                        <span className="date-day">{dateJJ.toLocaleDateString("fr-FR", dateDuJour)}</span><i
                        className="location-icon" data-feather="map-pin"></i><span className="location">LYON, FR</span>
                    </div>
                    <div className="weather-container"><i className="weather-icon" data-feather="sun"></i>
                        <h1 className="weather-temp">{j0}°C</h1>
                        <h3 className="weather-desc"> {descMeteo}</h3>
                    </div>
                </div>
                <div className="info-side">
                    <div className="today-info-container">
                        <div className="today-info">
                            <div className="precipitation"><span className="title">PRECIPITATION</span><span
                                className="value">0 %</span>
                                <div className="clear"></div>
                            </div>
                            <div className="humidity"><span className="title">HUMIDITE</span><span
                                className="value">{humiditeJour1} %</span>
                                <div className="clear"></div>
                            </div>
                            <div className="wind"><span className="title">VENT</span><span className="value">{ventJour1} km/h</span>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                    <div className="week-container">
                        <ul className="week-list">
                            <li className="active"><i className="day-icon" data-feather="sun"></i><span
                                className="day-name">AUJ</span><span className="day-temp">{j0}°C</span></li>
                            <li><i className="day-icon" data-feather="cloud"></i><span className="day-name">{jourPlus1}</span><span
                                className="day-temp">{j1}°C</span></li>
                            <li><i className="day-icon" data-feather="cloud-snow"></i><span
                                className="day-name">{jourPlus2}</span><span className="day-temp">{j2}°C</span></li>
                            <li><i className="day-icon" data-feather="cloud-rain"></i><span
                                className="day-name">{jourPlus3}</span><span className="day-temp">{j3}°C</span></li>
                            <div className="clear"></div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Meteo;