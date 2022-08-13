import React from 'react';
import './UserOutput.css'
const  userOut = (props) =>{
    return (
        <div className="user">
            <p>Hi {props.name} here</p>  
            <p>Lorem ipsum dolor sit.</p>  
        </div>
    );
} 
export default userOut;