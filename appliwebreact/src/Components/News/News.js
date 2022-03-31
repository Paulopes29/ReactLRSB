import React from "react";

const News = (props) => {
    return(
        <div>
            <ul>
                <br></br>
                {props.elem.content}
                <br></br>
                {props.elem.description}
                <br></br>
            </ul>
        </div>
    )
}
export default News;