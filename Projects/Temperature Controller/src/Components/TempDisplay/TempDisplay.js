import React from 'react';
import classes from "./TempDisplay.module.css";
const TempDisplay=(props)=>{
    return (
        <div className={classes.TempDisplay}>
            <div className={classes.TemperatureContainer}>{props.temperature}&#176;</div>
        </div>
    );
}
export default TempDisplay;