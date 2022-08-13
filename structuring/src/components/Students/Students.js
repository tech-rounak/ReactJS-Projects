import React ,{Component}from 'react';
import Student from './Student/Student.js'
class Students extends Component{
  //  static getDerivedStateFromProps(props,state){
  //     console.log('[Students.js] getDeriveStateFromProps' ,props);
  //     return state;
  //   }
    shouldComponentUpdate(nextProps,nextState){
      console.log('[Students.js] shouldComponentUpdate');
      // if(nextProps.student !== this.props.student){
      //   return true;
      // }
      // else{
      //    return false;
      // }
      return true;;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log('[Students.js] getSnapshotBeforeUpdate');
      return {message:'snapshot'};
    }
    componentDidUpdate(prevProps,prevState,snapshot){
      
      console.log('[Students.js] ComponentDidUpdate');
      console.log(snapshot);
    }
     componentDidMount(){
      console.log('[Students.js] componentDidMount');
    }
    componentWillUnmount(){
      console.log("[Students.js] Component Will Unmount")
    }

  render(){
  console.log('[Students.js] rendering....'); 
  return this.props.student.map((student,index)=>{
            return(
              <Student 
              click={()=>this.props.clicked(index)}
              name={student.name}
              roll={student.roll}
              score={student.score}
              key={student.id}
              changed={(event)=>this.props.changed(event,student.id)}
              className="stu"
              // isAuth = {this.isAuthenticated}
               
              />
              );
          });
        }
      };
export default Students