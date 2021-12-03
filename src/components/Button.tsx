import React from "react";
import s from './Button.module.css'

type propsButtonType = {
    name: string
    callback:()=>void
    dis: boolean

}

export const Button = (props: propsButtonType)=> {
    const onClickHandler = ()=> {
        props.callback()
    }

    return (
        <div>
            <button disabled={props.dis} className={s.button} onClick={onClickHandler}>{props.name}</button>
        </div>
    )
}