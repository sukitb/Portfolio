import React from "react";
import "../../global.sass"

export function Anchor(props) {

    return (
        <a className="underline-hover-effect" 
        href={props.href}
        target="_blank">
            {props.text}</a>
    )
}