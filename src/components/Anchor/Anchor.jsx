import React from "react";
import "../../global.sass"

export function Anchor(props) {

    return (
        <a className="underline-hover-effect" 
        href={props.href}
        target={props.blank ? "_blank" : ""}>
            {props.text}</a>
    )
}