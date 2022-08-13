import React from 'react';

const student = (props)=>{
    return(
        <div className={props.className}>
            <p onClick={props.click}>
            <h3>Student Name : {props.name}</h3>
            <h3>Student Roll : {props.roll}</h3>
            <h3>Student Score : {props.score}</h3>
            <input type="text" onChange={props.changed} value={props.name}/>
            </p>
        </div>
    );

}

export  default student;