import React from "react";
import style from "./News.module.css";
import { FlatList } from 'react-native';

const News = (props) => {
    return(
        <div className={style.widthP}>
            <div className={style.card}>
                <div className={style.container}>
                    <img className={style.imageP}
                         src={props.elem.urlToImage}
                         alt="actualite"/>
                    <h4><b><a className={style.removeBlueLink} href={props.elem.url}>{props.elem.title}</a></b></h4>

                    <p className={style.pStyle}>{props.elem.description}</p>
                </div>
            </div>
        </div>

    )
}
export default News;