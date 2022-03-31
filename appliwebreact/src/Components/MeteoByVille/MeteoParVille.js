import React, {useState} from "react";
import {fetchMeteo} from "../Api/ApiMeteoParVille"
import Card from "../Card/Card";
import styleCard from "../Card/Card.module.css"

const MeteoParVille = () => {
    const [requete, setRequete] = useState("");
    const [meteo, setMeteo] = useState({});

    //Formatage Date
    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

    const search = async (event) => {
        if (event.key === "Enter") {
            const data = await fetchMeteo(requete);

            setMeteo(data);
            setRequete("");
        }
    };

    return (
        <Card className={styleCard.cardMeteoVille}>
            <div className={styleCard.cardMeteoVille_input}>
                <div className="bp4-input-group">
                    <span className="bp4-icon bp4-icon-search"/>
                    <input className="bp4-input" type="search" placeholder="Rechercher ville"
                           onChange={(event) => setRequete(event.target.value)}
                           onKeyPress={search}
                    />
                </div>
            </div>
            <Card className={styleCard.cardMeteoVilleInterieure}>


                {meteo.main && (
                    <div>
                        <div
                            className={styleCard.cardMeteoVille_date}> {new Date().toLocaleDateString("fr-FR", options)}</div>

                        <h2>
                            <span>{meteo.name}</span>
                            <sup className={styleCard.cardMeteoVille_sup}>{meteo.sys.country}</sup>
                        </h2>
                        <div>
                            {Math.round(meteo.main.temp)}
                            <sup>&deg;C</sup>
                        </div>
                        <div>
                            <img
                                src={`https://openweathermap.org/img/wn/${meteo.weather[0].icon}@2x.png`}
                                alt={meteo.weather[0].description}
                            />
                        </div>
                    </div>
                )}
            </Card>
        </Card>
    )
}
export default MeteoParVille;
