import {useState} from "react";
import '../../App.css';
import {Icon, NumericInput} from "@blueprintjs/core";

function Country() {
    const [myCountry, setCountry] = useState([])

    const fetchDataForCountryHandler = async (apiAddress) =>  {
        const httpResponse = await fetch(apiAddress);
        const httpData = await httpResponse.json();
        setCountry(httpData.places);
    }

    const replacePostalCodeOnApiAddress = (postalCode) => {
        const apiAddress = 'http://api.zippopotam.us/FR/42400'
        console.warn(apiAddress);
        const newApiAddress = apiAddress.replace(/\d{5}$/g, postalCode);
        console.log(newApiAddress)
        return newApiAddress;
    }

    const getValue = () => {
        const value = document.getElementById('postalCodeInput').value;
        console.warn(value)
        const apiAddress = replacePostalCodeOnApiAddress(value)
        fetchDataForCountryHandler(apiAddress);
    }

    return (
        <div className="Country">
            <NumericInput
                id="postalCodeInput"
                placeholder="Entrer un code postale"
                leftIcon={<Icon icon="map-marker"/>}
                buttonPosition="none">
            </NumericInput>
            <button type='submit' onClick={getValue}>Rechercher</button>
            {myCountry.length > 0 &&
                myCountry.map((country) => {
                    console.warn(country)
                    return country.state })}
        </div>
    );
}

export default Country;
