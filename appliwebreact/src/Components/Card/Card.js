import React from "react";


const Card = (props) => {
    const className = props.className
    return(
        <div className={className}>
            {props.children}
        </div>
    )
}
export default  Card;
