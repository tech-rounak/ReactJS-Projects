import React, { Component } from 'react';
import Aux from '../../hoc/Aux1/aux1';
import classes from '../Layout/Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
// console.log(Toolbar)

class Layout extends Component{
    state={
        showSideDrawer:false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false});
    }
    SideDrawerToggleHandler = () =>{
        this.setState((prevState)=>{
            return{showSideDrawer:!prevState.showSideDrawer}
        } );
    }
    render(){
        return(
        <Aux>  
        <Toolbar drawerToggleClicked={this.SideDrawerToggleHandler} />
            <SideDrawer 
            open ={this.state.showSideDrawer}
            closed={this.sideDrawerClosedHandler}/>
            <main className = {classes.Content}>
                {this.props.children}
            </main>
        </Aux>
        );

    }
}

export default Layout