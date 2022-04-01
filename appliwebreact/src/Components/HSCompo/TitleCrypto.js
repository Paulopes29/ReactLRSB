import React from "react";
import Style from './Crypto.module.css'

//Cela me créer un titre avec le paramètre "Name" que je lui ai passé par son parent.
const TitleCrypto = (props) => {
    return(
        <div>
        <h1 className={Style.textcenter}>{props.Title}</h1>
        </div>
    )
}
export default  TitleCrypto;