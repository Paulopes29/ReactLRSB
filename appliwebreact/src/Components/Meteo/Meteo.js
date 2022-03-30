import React from 'react';
import { Card } from 'semantic-ui-react'
import meteoCSS from './Meteo.component.css';

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

const meteo = ({meteoData}) => (
    <Card>
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
                    className="location-icon" data-feather="map-pin"></i><span className="location">{meteoData.name}, FR</span>
                </div>
                <div className="weather-container"><i className="weather-icon" data-feather="sun"></i>
                    <h1 className="weather-temp">{meteoData.main.temp}°C</h1>
                    <h3 className="weather-desc">{meteoData.weather[0].description}</h3>
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
                            className="value">{meteoData.main.humidity} %</span>
                            <div className="clear"></div>
                        </div>
                        <div className="wind"><span className="title">VENT</span><span className="value">{meteoData.wind.speed*1.61} km/h</span>
                            <div className="clear"></div>
                        </div>
                    </div>
                </div>
                <div className="week-container">
                    <ul className="week-list">
                        <li className="active"><i className="day-icon" data-feather="sun"></i><span
                            className="day-name">AUJ</span><span className="day-temp">{meteoData.main.temp}°C</span></li>
                        <li><i className="day-icon" data-feather="cloud"></i><span className="day-name">{jourPlus1}</span><span
                            className="day-temp">21°C</span></li>
                        <li><i className="day-icon" data-feather="cloud-snow"></i><span
                            className="day-name">{jourPlus2}</span><span className="day-temp">08°C</span></li>
                        <li><i className="day-icon" data-feather="cloud-rain"></i><span
                            className="day-name">{jourPlus3}</span><span className="day-temp">19°C</span></li>
                        <div className="clear"></div>
                    </ul>
                </div>
                <div className="location-container">
                    <button className="location-button"><i data-feather="map-pin"></i><span>Change location</span>
                    </button>
                </div>
            </div>
        </div>
    </Card>
)
export default meteo;