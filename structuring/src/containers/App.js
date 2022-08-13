import React, { Component } from 'react';
import Students from '../components/Students/Students'
import Cockpit from '../components/Cockpit/Cockpit'
import PropTypes from'prop-types';
import './App.css'
import Aux from '../hoc/Auxi'
import withClass from '../hoc/withClass'
import AuthContext from '../context/auth-context';
class App extends Component{
   constructor(props){
    super(props);
    console.log('[App.js] constructor');
   }
    state={
      student:[
        {id:'sujdskl' ,name:'Ravi' ,roll: 121, score:433},
        {id:'scdcads' ,name:'Rajan' ,roll: 121, score:356},
        {id:'scdcdss' ,name:'Rishab' ,roll: 121, score:3056} 
      ],
      showStudent:false,
      showCockpit:true,
      authenticate:false
    }
    static getDerivedStateFromProps(props,state){
      console.log('[App.js] getDeriveStateFromProps' ,props);
      return state;
       
    }
    // componentWillMount(){
    //   console.log('[App.js] componentWillMount');
    // }
    componentDidMount(){
      console.log('[App.js] componentDidMount');
    }
    componentDidUpdate(){
      console.log('[App.js] ComponentDidUpdate')
    }
    shouldComponentUpdate(nextProps,nextState){
      console.log('[App.js] shouldComponentUpdate');   
      return true;
    }
    toggleStudentHandler = () => {
      const doesShow=this.state.showStudent;
      this.setState({showStudent:!doesShow})
    }
    deleteStudentHandler = (index)=>{
      const newStudent = this.state.student;
      // alternate way to spread the array
      // const newStudent=[...this.state.student]
      newStudent.splice(index,1);
      this.setState({student:newStudent})
    }
    nameChangeHandler = (event,id) => {
      const index = this.state.student.findIndex((p)=>{
        return p.id === id;
      });
      const tmpStudent = {...this.state.student[index]};
      tmpStudent.name = event.target.value;

      const newStudent = [...this.state.student]
      newStudent[index] = tmpStudent;

      this.setState({student:newStudent});
    }
    loginHandler= ()=>{
      this.setState({authenticate:true});
    }
    render(){
      console.log("[App.js] Render");
      const style={
        border:'2px solid black',
        backgroundColor:'#9f9fcc',
        width:'100%',
        height:'80px',
    
      }
      let student = null;
      if(this.state.showStudent){
        student=(
           <div >
              <Students 
                student={this.state.student}
                clicked={this.deleteStudentHandler}
                changed={this.nameChangeHandler}
                isAuthenticated = {this.state.authenticate}
              />
          </div>
        )
      }
    
    return(
      <div className="App" style = {style}>
      {/* <Aux>  */}
      <button onClick={()=>{
          this.setState({showCockpit:false})
        }}> Remove Cockpit</button>

        <AuthContext.Provider 
            value = {{
              authenticate:this.state.authenticate,
              login : this.loginHandler
             }}>        
          {this.state.showCockpit? (  
              <Cockpit student = {this.state.student}
              clicked = {this.toggleStudentHandler}
              //  login ={thi s.loginHandler}
              />
              ):null}
              {student}
        </AuthContext.Provider>

      {/* </Aux> */}
      </div>
    );

  }
}

export default App;
