import React, {useState} from "react";
import s from './Main.module.css';
import {Display} from "./components/Display";
import {Button} from "./components/Button";


export const Main = () => {
    const [counter, setCounter] = useState(0)
    const onIncreaseHandler = () => {
        setCounter(counter + 1)
    }
    const onDropHandler = () => {
        setCounter(0)
    }
    let disIncrease;
    let disDrop;
    counter >= 5 ? disIncrease = true : disIncrease = false
    counter === 0 ? disDrop = true : disDrop = false




    const styleDisco = () => {
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        return (`rgb(${r},${g},${b})`)
    }
    const discoButtons = {
        border: `2px solid ${styleDisco()}`,
        display: 'flex',
        'justify-content': 'space-around',
        margin: '10px',
        width: 'auto',
        height: '30px',
        'background-color': `${styleDisco()}`,
        'border-radius': '5px',
    }
    const discoMain = {
        margin: '300px',
        width: '200px',
        height: '150px',
        border: `2px solid ${styleDisco()}`,
        'background-color': `${styleDisco()}`,
        'border-radius': '10px',
        'box-shadow': `0 0 30px 5px ${styleDisco()}`,
        transition: '1s box-shadow',
    }

    return (
        <div style={discoMain}>
            <Display value={counter}/>
            <div style={discoButtons}>

                <Button name={'increase'} callback={onIncreaseHandler} dis={disIncrease}/>

                <Button name={'drop'} callback={onDropHandler} dis={disDrop}/>
            </div>
        </div>
    )
}