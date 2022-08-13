import React from 'react';
import Aux from'../../../hoc/Aux1/aux1';
import Button from '../../UI/Button/Button'
const orderSummary = (props)=>{
    const ingredientSummary = Object.keys(props.ingredients).map(igkey=>{
        return( 
        <li key={igkey}>
            <span style={{textTransform:'capitalize'}}>
                {igkey}:{props.ingredients[igkey]}
            </span>
        </li>
        );
    });
    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicioud burger with the following ingredients:</p>
            <ul>
             {ingredientSummary}
            <p> <b>Total Amount : {props.price}</b></p>
            </ul>
            <p>Continue To Checkout</p>
            <Button btnType = "Success"
            clicked={props.success}>Continue</Button>
            <Button btnType="Danger" clicked={props.danger}>Cancel</Button>
        </Aux>
    );
}

export default orderSummary;