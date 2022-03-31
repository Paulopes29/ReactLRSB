import React from "react";
import Style from './Crypto.module.css'


const TitleCrypto = (props) => {
    return(
        <div>
        <h1 className={Style.textcenter}>{props.Title}</h1>
        </div>
    )
}
export default  TitleCrypto;