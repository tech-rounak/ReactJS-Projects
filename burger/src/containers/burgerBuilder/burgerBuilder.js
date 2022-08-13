 import React , {Component} from 'react';
 import Aux from '../../hoc/Aux1/aux1'
 import Burger from '../../components/Burger/Burger';
 import BuildControls from '../../components/Burger/buildControls/BuildControls';
 import Modal from '../../components/UI/Modal/Modal';
 import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
 import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorClass from '../../hoc/withErrorClass/withErrorClass'; 
const ingredient_price={
    salad:0.5,
    bacon:2.5,
    cheese:1.5,
    meat:2.0
 }
 class burgerBuilder extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={...}
    // }
    state = {
        ingredients:{
            salad:0,
            bacon:0,
            meat:0,
            cheese:0
        },
        totalPrice: 4,
        purchasable:false,
        purchasing:false,
        loading:false
    }

    purchaseHandler=()=>{
        this.setState({purchasing:true})
    }
    cancelPurchaseHandler = ()=>{
        this.setState({purchasing:false})
    }
    puchaseContinueHandler= ()=>{
 
        const queryParams=[];
        for(let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i)+'=' + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push('price='+this.state.totalPrice)
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname:'/checkout',
            search: '?'+ queryString
        });
    }
    updatePurchaseState(ingredients){

        // console.log(Object.keys(ingredients))
        const sum = Object.keys(ingredients)
        .map( igkey=>{
            return ingredients[igkey];
        })
        .reduce((sum,el)=>{
            // console.log("sum "+sum);
            // console.log("el "+el);
            return sum+el;
        },0);
        this.setState({purchasable:sum>0});
    }
    addIngredientHandler=(type)=>{
        const oldCount= this.state.ingredients[type];
        const updatedCount=oldCount+1;
        const updatedIngredients={
            ...this.state.ingredients
        }
        updatedIngredients[type]=updatedCount;
        
        const addPrice = ingredient_price[type];
        
        const newPrice=addPrice+this.state.totalPrice;
        this.setState({ingredients:updatedIngredients,totalPrice:newPrice})
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type)=>{
        
        let oldCount = this.state.ingredients[type];
        let updatedCount = oldCount-1;
        if(updatedCount<0)return;
        const updatedIngredients={
            ...this.state.ingredients
        }
        updatedIngredients[type]=updatedCount;
        
        let addPrice = ingredient_price[type];
        let newPrice = this.state.totalPrice;

        if(updatedCount >= 0){
            newPrice = newPrice- addPrice;
        }
     
        this.setState({ingredients:updatedIngredients,totalPrice:newPrice})
        this.updatePurchaseState(updatedIngredients);
    }
    
    render(){
        let orderSummary= <OrderSummary ingredients={this.state.ingredients}
                    success={this.puchaseContinueHandler}
                    danger={this.cancelPurchaseHandler}
                    price={this.state.totalPrice}
                    />;
        if(this.state.loading){
            orderSummary = <Spinner/>;
        }
        return(
            <Aux>
                <Modal show ={this.state.purchasing}
                modalClosed ={this.cancelPurchaseHandler} 
                >
                {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                ingredientAdded ={this.addIngredientHandler}
                ingredientRemoved ={this.removeIngredientHandler}
                price = {this.state.totalPrice}
                purchase={this.state.purchasable}
                ordered={this.purchaseHandler}
                />
            </Aux>
        );
    }
 }
 export default withErrorClass(burgerBuilder,axios);