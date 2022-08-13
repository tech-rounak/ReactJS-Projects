import React,{ useEffect } from 'react'
import './Cockpit.css'
import AuthContext from '../../context/auth-context';
const Cockpit=(props)=>{
   useEffect(()=>{
     console.log("[Cockpit.js] useEffect Working....");
    //  alert("H ello");
    setTimeout(() => {
    }, 1000);
    return ()=>{
      console.log('[Cockpit.js] Cleanup Working in useEffect');
    };
  }, []);

  useEffect(()=>{
      console.log("[Cockpit.js] 2nd useEffect Working....");
    return()=>{
      console.log('[Cockpit.js] Cleanup 2 Working in useEffect');
    };
  })
    const classes=[];
    if(props.student.length<=2){
      classes.push('bold');
    }
    if(props.student.length<=1){
      classes.push('red');
    }
    return(
        <div>   
            <h1>Welcome To Student Base</h1>
            <p className={classes.join(' ')}>This is really awesome</p>
            <button 
            className="styleButton"
            onClick={props.clicked}>
            Click to View Student Details</button>   
            <AuthContext.Consumer>
            { (context)=> <button 
            className="styleButton"
            onClick={context.login}>
            Login</button>}     
            </AuthContext.Consumer>
        </div>
  
    );
};
export default Cockpit;