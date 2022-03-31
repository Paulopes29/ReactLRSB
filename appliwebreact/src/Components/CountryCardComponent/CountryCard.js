import React from "react";
import style from "./CountryCard.module.css"
import {Card, Elevation} from "@blueprintjs/core";

// Récupération des datas reçu depuis le component Country via props.data
const CountryCard = (props) => {
    return (
        <div className={style.cardContent}>
            <Card interactive={true} elevation={Elevation.TWO}>
                <h5>Ville : {props.data['place name']}</h5>
                <p>Région : {props.data.state}</p>
                <p>Longitude : {props.data.longitude}</p>
                <p>Latitude : {props.data.latitude}</p>
            </Card>
        </div>
    )
}

export default CountryCard;