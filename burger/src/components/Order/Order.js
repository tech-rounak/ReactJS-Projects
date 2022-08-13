import React from 'react';
import classes from './Order.module.css'
const order=(props)=>(
    // alert('fjsdkl');
    <div className={classes.Order}>
        <p>Ingredients:</p>
        <div>
        <p>Salad:{props.orderDetails.ingredients.
        salad}</p>
        <p>Meat:{props.orderDetails.ingredients.
        meat}</p>
        <p>Cheese:{props.orderDetails.ingredients.
        cheese}</p>
        <p>Baccon:{props.orderDetails.ingredients.
        bacon}</p>
        </div>
        <p>Price: <strong>USD {props.orderDetails.price}</strong></p>
    </div>
);

export default order;