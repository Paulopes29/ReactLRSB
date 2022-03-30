import style from './Accueil.module.css'
import Mail from './Mail/Mail.js'

function Accueil() {
    return(
        <div className={style.maindiv}>
            <div>
                <h1 >Votre Météo Du Jour</h1>
            </div>
            <div>               
                   <Mail  name={"S'abonner"} />                                            
            </div>
        </div>
    )
}
export default  Accueil;