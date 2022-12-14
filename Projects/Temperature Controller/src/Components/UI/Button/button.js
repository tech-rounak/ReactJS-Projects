import React from 'react'
import classes from './button.module.css';
const Button = (props) =>{
    return(
        <button 
        className={classes.button} 
        onClick={props.clicked}>
            {props.children}
        </button>
    );
}
export default Button;