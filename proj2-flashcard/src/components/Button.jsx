import React from "react";
import "./button.css"
const Button = (props) =>  {
    return(
        <button {...props}>
            {props.children}
        </button>
    )
}

export default Button;