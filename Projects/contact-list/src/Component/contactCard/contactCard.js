import React from "react";
import classes from './contactCard.module.css';
const contactCard = (props)=>{
    return(
        <div className={classes.contactCard}>
            <img src={props.avatar} alt="profile"></img>
            <div>
                <p>Name: {props.name}</p>
                <p>Email: {props.email}</p>
                <p>Age: {props.age}</p>
            </div>
        </div>
    );
}
export default contactCard;