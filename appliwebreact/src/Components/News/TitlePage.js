import React from "react";
import style from './News.module.css';

const TitlePage = (props) => {
    return(
        <div className={style.centerContent}>
            <h2>{props.titre}</h2>
        </div>
    )
}
export default TitlePage;