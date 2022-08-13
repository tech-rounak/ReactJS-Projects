import React,{Component} from 'react';
import Aux from '../../../hoc/Auxi.js'
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context.js';
class Student extends Component{
    render(){
    return(
        // <div className={this.props.className}>
        <Aux>
            <AuthContext.Consumer>
            {(context)=>context.authenticate?<p>Authenticated</p>:<p>Please Login </p>}
            </AuthContext.Consumer>
            <p onClick={this.props.click }>
            <h3>Student Name : {this.props.name}</h3>
            <h3>Student Roll : {this.props.roll}</h3>
            <h3>Student Score : {this.props.score}</h3>
            <input type="text" onChange={this.props.changed} defaultValue={this.props.name}/>
            </p>
        </Aux>
        //  </div>
    );
    }
}
Student.propTypes={
    click:PropTypes.func,
    name:PropTypes.string,
    roll:PropTypes.number,
    score:PropTypes.number,
    changed:PropTypes.func
};
export  default Student;