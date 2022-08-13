import React from 'react';
import Aux from '../Aux1/aux1'
import Modal from '../../components/UI/Modal/Modal';
const withErrorClass = (WrappedComponent,axios)=>{
    return class extends React.Component{
        state={
            error:null
        }
        componentDidMount(){
            axios.interceptors.request.use(req=>{
                this.setState({error:null});
                return req;  
            });
            axios.interceptors.response.use(res=>res,error=>{
                this.setState({error:error});
                console.log(this.state.error)
            });
        }
        errorConfirmedHandler = ()=>{
            this.setState({error:null})
        }
        render(){
            return (
                <Aux>
                    <Modal 
                    show={this.state.error}
                    modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message:null}
                    </Modal>
                    
                    <WrappedComponent {...this.props}/>
                </Aux>
            );
        }
    }
}
export default withErrorClass;