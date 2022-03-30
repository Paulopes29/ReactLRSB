import '../../App.css';
import {useState} from "react";
import {useEffect} from "react";

function Country() {
    const [myCountry, setCountry] = useState([])
    const [countryId] = useState(0)

//   function fetchDataForCountryHandler() {
//       fetch('http://api.zippopotam.us/FR/42400')
//           .then(response => {
//               console.log(response);
//               return response.json();
//           }).then(data => {
//           console.log(data)
//           setCountry(data.places);
//       })
//   }

    const fetchDataForCountryHandler = async () =>  {
        const httpResponse = await fetch("http://api.zippopotam.us/FR/42400");
        const httpData = await httpResponse.json();
        setCountry(httpData.places);
    }

    useEffect(() => {
        fetchDataForCountryHandler();
    }, [countryId]);

    return (
        <div className="Country">
            {myCountry.length > 0 &&
                myCountry.map((country) => {
                return country.state })}
        </div>
    );
}

export default Country;
