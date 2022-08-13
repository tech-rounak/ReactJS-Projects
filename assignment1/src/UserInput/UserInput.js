import React from 'react';

const  user = (props) =>{
    const style={
        border:'2px solid blue'
    };
    return (
        <div className="user">
            <input type="text" style={style} onChange={props.changed} value={props.value}/>  
        </div>
    );
} 
export default user;