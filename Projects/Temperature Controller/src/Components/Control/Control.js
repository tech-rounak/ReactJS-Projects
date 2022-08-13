import React ,{useState}from 'react';
// import { useState } from 'react';
import TempDisplay from '../TempDisplay/TempDisplay';
import Button from '../UI/Button/button';
import classes from "./Control.module.css";
const Control=(props)=>{
    const [temperatureValue,setTemperatureValue] = useState(10);
    const increaseTemperature=()=>{
        const newTemperature = temperatureValue+1;
        setTemperatureValue(newTemperature);
    }
    const decreaseTemperature=()=>{
        const newTemperature = temperatureValue-1;
        setTemperatureValue(newTemperature);
    }
    return(
        <div className={classes.control}>
            <h2>{props.tempType}</h2>
            <TempDisplay temperature={temperatureValue}></TempDisplay>
            <Button clicked = {increaseTemperature}>+</Button>
            <Button clicked = {decreaseTemperature}>-</Button>
        </div>
    );
}

export default Control