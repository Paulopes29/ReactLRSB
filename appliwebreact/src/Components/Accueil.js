import Home from './Accueil.module.css'
import { Button, Classes, ControlGroup, InputGroup, Intent } from '@blueprintjs/core';

function homePage() {
    return (
        <div className={Home.maindiv}>
            <div className={Home.picdiv + ' ' + Home.verticalAlign} >
                <h1>Votre météo de la semaine</h1>
            </div>
            <div>               
                    <ControlGroup vertical style={{ width: 300, height: 300 }}>
                    <p>Du soleil jusque dans vos mails !</p>
                    <InputGroup placeholder="Nom" />
                    <InputGroup placeholder="Email" />
                    <Button className={Classes.LARGE} intent={Intent.PRIMARY} text="S'abonner" />
                    </ControlGroup>                              
            </div>
        </div>


    );
}

export default homePage