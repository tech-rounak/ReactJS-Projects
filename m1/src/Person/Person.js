import React from 'react'

const person = (props) =>{
    return (
        <div>
            <h2>My Name is  : {props.name}</h2>
            <h3>{props.children}</h3>
        </div>
    );
}
export default person;