import React from "react";
import s from './Display.module.css';

type propsDisplayType = {
    value: number
}

export const Display = (props: propsDisplayType)=> {


    return (
        <div className={props.value >= 5 ? s.displayOver : s.display }>

            {props.value}
        </div>
    )
}