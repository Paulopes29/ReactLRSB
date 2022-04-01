import {useEffect, useState} from "react";
import TitleCrypto from './TitleCrypto'
import PageCrypto from './PageCrypto'
import CStyle from './Crypto.module.css'

function CryptoJS() {
 // let myVar ='Hello World';
const [myVar,setMyVar] = useState('');
const [myCrypto, setCrypto] = useState([]);


 //Cette fonction me permet de requêter l'API Crypto afin de récupérer des informations dont je vais avoir besoin
 //J'affiche le resultat dans les logs 
    function fetchCryptoHandler() {
     
        fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=100&cy=INR')
            .then(response => {
              
                console.log(response);
               return  response.json()
            }).then(data => {
                console.log(data.coins[0]);
                setCrypto(data.coins)
        })
    }
    //Je met à jours les informations des cryptos pour avoir les valeurs en temps réel
    useEffect(() => {
        fetchCryptoHandler();
    }, [myCrypto]);

    

  return (
      <div className="App">
        <h2>{myVar}</h2>
          <TitleCrypto Title='Cryptocurrency'/>
          <div className={CStyle.threeRow}>
            {
              myCrypto.map((element) => {
              return <PageCrypto elem={element} />

              })
          }
          </div>
          

      </div>
  );
}

export default CryptoJS;