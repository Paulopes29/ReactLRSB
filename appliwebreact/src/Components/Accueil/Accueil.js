import style from './Accueil.module.css'
import Mail from './Mail/Mail.js'

function Accueil() {
    return (
        <div className={style.parentCard}>
            <div className={style.parent}>
                <h1>Votre météo</h1>
            </div>
            <div className={style.boxwrap}>
                <div className={style.boxchild + ' ' + style.nuage }>Nuageux</div>                
                <div className={style.boxchild + ' ' + style.soleil}>Ensoleillé</div>
                <div className={style.boxchild + ' ' + style.neige}>Neige</div>                
            </div>
            <div className={style.boxmail}>
             <Mail name="S'abonner"/>
            </div>
            
        </div>



    )
}
export default Accueil;