import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-orders'
import Spinner from  '../../../components/UI/Spinner/Spinner'
import classes from './ContactDetails.module.css'
import Input from '../../../components/UI/Input/Input'
// import input from '../../../components/UI/Input/Input';
class ContactData extends Component{
    state={
        orderForm:{
            name:{
                elementType: 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Name'
                },
                value:'' 
            },
            email:{
                elementType: 'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Your Email'
                },
                value:''
            },
            street:{
                elementType: 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Street'
                },
                value:''
            },
            zipCode:{
                elementType: 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'ZIP Code'
                },
                value:''
            },
            Country:{
                elementType: 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Country'
                },
                value:''
            },
            deliverMethod:{
                elementType: 'select',
                elementConfig:{
                    options:[
                        {value:'Fastest',displayValue:'Fastest'},{value:'Cheapest',displayValue:'Cheapest'}
                ]
                 
                },
                value:''
            },
            
        },
        loading:false
    }
    orderHandler = (event) =>{
        event.preventDefault(); 
        console.log(this.props.ingredients)
    
        this.setState({loading:true});
        const formData={}
        for(let key in this.state.orderForm){
            formData[key]=this.state.orderForm[key].value;
        }
        
        const order={
            ingredients:this.props.ingredients,
            price:this.props.totalPrice,
            orderData:formData
        }
        axios.post('/orders.json',order)
        .then(response=>{
           this.setState({loading:false})
           this.props.history.push('/')
        }).catch(err=>{
            this.setState({loading:false})
         
        });
    }
    inputChangedHandler=(event,inputIdentifier)=>{
        // console.log(event.target.value)
        const updatedOrders={...this.state.orderForm};
        const updatedElement={...updatedOrders[inputIdentifier]};
        updatedElement.value=event.target.value;
        updatedOrders[inputIdentifier]=updatedElement;
        this.setState({orderForm:updatedOrders}) 
        console.log(updatedOrders)
    }
    render(){
        const formElements=[];
        for(let key in this.state.orderForm){
            formElements.push({
                  id:key,
                  config:this.state.orderForm[key] 
            });
        }
        let form=(<form onSubmit ={this.orderHandler}>
                    {
                        formElements.map(formElements=>(
                            <Input 
                            key={formElements.id}
                            elementType={formElements.config.elementType}
                            elementConfig={formElements.config.elementConfig}
                            value={formElements.config.elementConfig.placeholder}
                            changed={(event)=>this.inputChangedHandler(event,formElements.id)}
                            />
                        ))
                    }
                <Button btnType="Success">ORDER</Button>
                </form>);
        if(this.state.loading){
            form = <Spinner />
        }
        return (
            <div className={classes.ContactDetails}>
                <h3>Enter Contact details</h3> 
                {form}
            </div>
        )
    }
}

export default ContactData