import React ,{Component} from 'react';
import Order from '../../components/Order/Order';
// import classes from './Orders.module.css'
import axios from '../../axios-orders'
import withErrorClass from '../../hoc/withErrorClass/withErrorClass';
class Orders extends Component{
    state={
        orders:[],
        loading:true
    }
    componentDidMount(){
        axios.get("/orders.json").then(res=>{
            let fetchOrders=[];
            for(let key in res.data){
                fetchOrders.push({
                    ...res.data[key],
                    id:key
                })
            }
            console.log(fetchOrders)
            this.setState({loading:false,orders:fetchOrders})
        }).catch(err=>{
             this.setState({loading:false})
        });
    }
    render(){
        // alert("dfkjsd")
        return (
            <div>
                {this.state.orders.map(order=>(
                    <Order key={order.id} orderDetails ={order}/>
                ))}
            </div>
        );
    }
}
export default withErrorClass(Orders,axios);