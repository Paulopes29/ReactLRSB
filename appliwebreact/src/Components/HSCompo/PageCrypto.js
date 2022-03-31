import React from "react";
import CryptoStyle from './Crypto.module.css'


const Cryptos = (props) => {
    return (
        <div>
            <div className={CryptoStyle.cardBody}>            
                    <div className={CryptoStyle.cardTitle}>
                    {props.elem.symbol}
                    </div>

                    <div className={CryptoStyle.cardIcon}>
                        <img src={props.elem.icon}></img>
                    </div>

                    <div>
                        <table className={CryptoStyle.widthMax}>
                            <tbody>
                                <tr>
                                    <td> {props.elem.name}</td>
                                    <td className={CryptoStyle.rightext}>{Math.round((props.elem.price)*100)/100}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> 
            </div>
        </div>
    )
}
export default Cryptos;