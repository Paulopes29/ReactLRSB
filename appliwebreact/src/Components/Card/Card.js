import React from "react";

//Creation d'un card pour structurer l'affchage des components
// on peut passer une classe dans les props pour avoir la possibilité d'afficher des cards avec des styles differents
const Card = (props) => {
    const className = props.className
    return(
        <div className={className}>
            {props.children}
        </div>
    )
}
export default  Card;
