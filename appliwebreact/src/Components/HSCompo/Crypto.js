import {useEffect, useState} from "react";
import TitleCrypto from './TitleCrypto'
import PageCrypto from './PageCrypto'

function CryptoJS() {
 // let myVar ='Hello World';
const [myVar,setMyVar] = useState('');
const [myMovie, setMovies] = useState([]);



    function fetchMoviesHandler() {
        fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=100&cy=INR')
            .then(response => {
                console.log(response);
               return  response.json()
            }).then(data => {
                console.log(data.coins[0]);
                setMovies(data.coins)
        })
    }

    useEffect(() => {
        // Met à jour le titre du document via l’API du navigateur
       // setMyVar(Vous avez cliqué ${count} fois);
        fetchMoviesHandler();
    }, [myMovie]);

    const onClickHandler = () => {
      console.log('Clicked');
     // myVar = 'GoodBye';
      setMyVar ('Hello World updated');
      console.log(myVar);

      setMyVar((prevState) => {
          prevState += ' updated';
          console.log(prevState);
          return prevState;
      })

    }

    const ChildToParentUpdater =(data) => {
      console.log('ChildToParentUpdater',data);
    }

  return (
      <div className="App">
        <h2>{myVar}</h2>
          <TitleCrypto Title='Cryptocurrency' updater={ChildToParentUpdater} />
          {
              myMovie.map((element) => {
              return <PageCrypto elem={element} />

              })
          }

      </div>
  );
}

export default CryptoJS;