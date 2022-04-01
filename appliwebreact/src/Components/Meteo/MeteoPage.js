import React, {useEffect, useState} from 'react';
import style from './Meteo.module.css';

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
        apiKey: 'b73c6ca7f13ab1022bc2768f583091e0',
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


    //Ici on récupère les données qui nous intéressent : la température jusqu'à J+3 && l'humidité du jour J && la vitesse du vent jour J && description meteo jour J && %tage pluie
    const tempJours = meteo && meteo.daily.slice(0, 5).map((d) => parseFloat(((d.temp.max-32)*(5/9))).toString().substring(0,4));
    const humiditeJours = meteo && meteo.daily.slice(0, 1).map((d) => parseFloat((d.humidity)).toString().substring(0,3));
    const ventJours = meteo && meteo.daily.slice(0, 1).map((d) => parseFloat((d.wind_speed)).toString().substring(0,1));
    const descriptionMeteo = meteo && meteo.daily.slice(0, 1).map((d) => (d.weather[0].description));
    const pourcentagePluie = meteo && meteo.daily.slice(0, 1).map((d) => (d.rain));
    const pourcentageNeige = meteo && meteo.daily.slice(0, 1).map((d) => (d.snow));

    // Définition des variables jour J jusqu'à J+3
    let j0 = 0;
    let j1 = 0;
    let j2 = 0;
    let j3 = 0;
    // Definition humidité jour J, vitese vent jour J, description meteo jour J
    let humiditeJour1 = 0;
    let ventJour1 = 0;
    let descMeteo = "";
    let pluie = 0;
    // Si les resultats retournés par l'API ne sont pas nuls, on assigne les valeurs
    if(tempJours !== null && humiditeJours !== null && ventJours !== null && descriptionMeteo !== null && pourcentagePluie !== null){
        j0 = tempJours[0];
        j1 = tempJours[1];
        j2 = tempJours[2];
        j3 = tempJours[3];
        humiditeJour1 = humiditeJours[0];
        ventJour1 = ventJours[0];
        descMeteo = descriptionMeteo[0];
        if(descMeteo == "chutes de neige") {
            pluie = pourcentageNeige[0];
        }else {
            pluie = pourcentagePluie[0];
        }
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
            <div className={style.containerDepart}>

                <div className={style.weatherSidePart}>
                    <div className={style.weatherGradientC}></div>
                    <div className={style.dateContainerC}>
                        <h2 className={style.dateDaynameC}>{dateDuJourMajuscule}</h2>
                        <span className={style.dateDayC}>{dateJJ.toLocaleDateString("fr-FR", dateDuJour)}</span>
                            <i className={style.locationIconC} data-feather="map-pin"></i>
                        <span className={style.locationC}>LYON, FR</span>
                    </div>
                    <div className={style.weatherContainerC}><i className={style.weatherIconC2} data-feather="sun"></i>
                        <h1 className={style.weatherTempC}>{j0}°C</h1>
                        <h3 className={style.weatherDescC}> {descMeteo}</h3>
                    </div>
                </div>
                <div className={style.infoSideC}>
                    <div className={style.todayInfoC}>
                        <div className={style.todayInfoC}>
                            <div className="precipitation"><span className={style.title}>PRECIPITATION</span><span
                                className={style.valueC}>{pluie} %</span>
                                <div className={style.clearC}></div>
                            </div>
                            <div className="humidity"><span className={style.title}>HUMIDITE</span><span
                                className={style.valueC}>{humiditeJour1} %</span>
                                <div className={style.clearC}></div>
                            </div>
                            <div className="wind"><span className={style.title}>VENT</span><span className={style.valueC}>{ventJour1} km/h</span>
                                <div className={style.clearC}></div>
                            </div>
                        </div>
                    </div>
                    <div className="week-container">
                        <ul className={style.weekListC}>
                            <li className={style.active}><i className={style.dayIconC} data-feather="sun"></i><span
                                className={style.dayNameC}>AUJ</span><span className={style.dayTempC}>{j0}°C</span></li>
                            <li><i className={style.dayIconC} data-feather="cloud"></i><span className={style.dayNameC}>{jourPlus1}</span><span
                                className={style.dayTempC}>{j1}°C</span></li>
                            <li><i className={style.dayIconC} data-feather="cloud-snow"></i><span
                                className={style.dayNameC}>{jourPlus2}</span><span className={style.dayTempC}>{j2}°C</span></li>
                            <li><i className={style.dayIconC} data-feather="cloud-rain"></i><span
                                className={style.dayNameC}>{jourPlus3}</span><span className={style.dayTempC}>{j3}°C</span></li>
                            <div className={style.clearC}></div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Meteo;
