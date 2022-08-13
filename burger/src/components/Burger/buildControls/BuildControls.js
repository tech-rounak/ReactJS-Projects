import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls=[
{label:'Salad',type:'salad'},
{label:'Cheese',type:'cheese'},
{label:'Meat',type:'meat'},
{label:'Bacon',type:'bacon'},
];
const buildControls=(props)=>(
    <div className={classes.BuildControls}>
       <p><b>Current Price:{props.price.toFixed(2)}</b></p>
        {controls.map(ctrl=>(
            <BuildControl 
            key ={ctrl.label} 
            label={ctrl.label}
            added={()=>{props.ingredientAdded(ctrl.type) }}
            removed={()=>{props.ingredientRemoved(ctrl.type) }}
            />
        ))}
    <button 
    className={classes.OrderButton} 
    disabled={!props.purchase}
    onClick={props.ordered}
    >ORDER NOW
    </button>
    </div>
);

export default buildControls;