import React from 'react';
import classes from './Input.module.css'
const input = (props) => {
    let inputElement = null;
    switch(props.elementType){
        case('input'):
        inputElement=<input className={classes.InputElement} {...props.elementConfig} onBlur={props.changed}/>;
        break;
        case('textarea'):
        inputElement=<textarea className={classes.InputElement}{...props.elementConfig} onBlur={props.changed}/>;
        break;
        case('select'):
        inputElement=(
        <select 
        className={classes.InputElement} {...props.elementConfig} onBlur={props.changed}
        value={props.value}>
            {props.elementConfig.options.map(option=>(
                <option value={option.value} key={option.value }>
                    {option.displayValue}
                </option>
            ))}
        </select>
        );
        break;
        default:
        inputElement=<input className={classes.InputElement}{...props.elementConfig}/>;
    }
    return(
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;