import React, { Component } from 'react';
import Student from './Student/Student'
// import Radium from'radium';
import './App.css'
// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }



class App extends Component{
    state={
      student:[
        {id:'sujdskl' ,name:'Ravi' ,roll: '132', score:'433'},
        {id:'scdcads' ,name:'Rajan' ,roll: '121', score:'356'},
        {id:'scdcdss' ,name:'Rishab' ,roll: '121', score:'356'}
      ],
      showStudent:false
    }
    toggleStudentHandler = () => {
      const doesShow=this.state.showStudent;
      this.setState({showStudent:!doesShow})
    }
    deleteStudentHandler=(index)=>{
      const newStudent=this.state.student;
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
    render(){
      const style={
        border:'2px solid black',
        backgroundColor:'#9f9fcc',
        width:'100%',
        height:'80px',
        // ':hover':{
        //   backgroundColor:'white'
        // }
      }


      let student=null;
      if(this.state.showStudent){
        student=(
           <div >
            {this.state.student.map((student,index)=>{
              return<Student 
              // click={()=>this.deleteStudentHandler(index)}
              name={student.name}
              roll={student.roll}
              score={student.score}
              key={student.id}
              changed={(event)=>this.nameChangeHandler(event,student.id)}
              className="stu"

              />
            })
            }
          </div>
        )
      }
      //   student=(
      //     <div>
      //         <Student name = {this.state.student[0].name}
      //         roll = {this.state.student[0].roll} score = {this.state.student[0].score} className="stu"></Student>
      //         <Student name = "Rounak" roll = "151" score = "500" className="stu"></Student>
      //         <Student name = "Rounak" roll = "151" score = "500" className="stu"></Student>
      //     </div> 
      //   );
      //    style.backgroundColor='#bc7b7b';

    const classes=[];
    if(this.state.student.length<=2){
      classes.push('bold');
    }
      if(this.state.student.length<=1){
      classes.push('red');
    }
    return(
      <div className="App" style={style}>
        <h1>Welcome To Student Base</h1>
        <p className={classes.join(' ')}>This is really awesome</p>
        <button 
        className="styleButton"
         onClick={this.toggleStudentHandler}>
          Click to View Student Details</button>
          {/* By makeing a student varible */}
          {student}
          {/* Ternary if else statement*/}
          {/* {this.state.showStudent ===true? 
          <div>
              <Student name = {this.state.student[0].name}
              roll = {this.state.student[0].roll} score = {this.state.student[0].score} className="stu"></Student>
              <Student name = "Rounak" roll = "151" score = "500" className="stu"></Student>
              <Student name = "Rounak" roll = "151" score = "500" className="stu"></Student>
          </div>:null} */}

          {/* <div >
            {this.state.student.map((student,index)=>{
              return<Student 
              // click={()=>this.deleteStudentHandler(index)}
              name={student.name}
              roll={student.roll}
              score={student.score}
              key={student.id}
              changed={(event)=>this.nameChangeHandler(event,student.id)}
              className="stu"

              />
            })
            }
          </div> */}
      </div>
    );

  }
}

export default App;
