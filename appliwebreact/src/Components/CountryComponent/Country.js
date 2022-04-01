import {useState} from "react";
import '../../App.css';
import {Icon, NumericInput} from "@blueprintjs/core";
import CountryCard from "../CountryCardComponent/CountryCard";
import style from "./Country.module.css"

function Country() {
    const [myCountry, setCountry] = useState([])

    // Call sur l'API Zippopotam en utilisant une fonction async pour eviter de chainer les promesses
    const fetchDataForCountryHandler = async (apiAddress) =>  {
        const httpResponse = await fetch(apiAddress);
        const httpData = await httpResponse.json();
        setCountry(httpData.places);
    }

    // Remplace le code postal présent dans l'adresse de l'API par la chaine de caractère reçu depuis l'input en front
    const replacePostalCodeOnApiAddress = (postalCode) => {
        const apiAddress = 'http://api.zippopotam.us/FR/42400'
        console.warn(apiAddress);
        const newApiAddress = apiAddress.replace(/\d{5}$/g, postalCode);
        console.log(newApiAddress)
        return newApiAddress;
    }

    // Récupère la valeur entrée dans l'input lorsqu'on appui sur le bouton rechercher
    const getValue = () => {
        const value = document.getElementById('postalCodeInput').value;
        console.warn(value)
        const apiAddress = replacePostalCodeOnApiAddress(value)
        fetchDataForCountryHandler(apiAddress);
    }

    // Ci-dessous une map servant à récuperer toute les ville retourner par l'API pour les envoyer via la props dans
    // notre component CountryCard
    return (
        <div className={style.container}>
            <div className="Country bp4-card">
                <div className={style.searchDiv}>
                    <div className={style.inputMargin}>
                        <NumericInput
                            id="postalCodeInput"
                            placeholder="Entrer un code postale"
                            leftIcon={<Icon icon="map-marker"/>}
                            buttonPosition="none">
                        </NumericInput>
                    </div>
                    <a className="bp4-button bp4-icon-search bp4-intent-success " role="button" tabIndex={0} onClick={getValue}>Rechercher</a>
                </div>
                <div className={style.resultContent}>
                    {myCountry.length > 0 &&
                        myCountry.map((country) => {
                            console.warn(country)
                            return <CountryCard key={country.id} data={country}/>
                        })}
                </div>
            </div>
        </div>
    );
}

export default Country;
