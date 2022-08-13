import React ,{Component}from 'react';
import './App.css';
import Person from './Person/Person'

// //to define a component
class App extends Component{
  render(){
    
    return(
      <div className="App">
      <h1>Welcome to React1</h1>
      <button onClick={this.switchNameHandler}>Change Name </button>
      <Person name={this.state.name}></Person>
      {/* <Person name="Ayush">My Hobby is: Coding</Person> */}
      </div>
    );
    // return React.createElement('div',null,'h1','New WAY');
    // return React.createElement('div',{className : "App"},React.createElement('h1',null,"Now Working"));
  }
}
// const App = props => {
//   const [personState , setPersonState]= useState({
//     name:'subham',
//     roll:'89'
// });
// const switchNameHandler = () =>{ 
//     setPersonState({
//       name:'Ayush'
//     });
//   }
//     return(
//       <div className="App">
//       <h1>Welcome to React1</h1>
//       <button onClick={switchNameHandler}>Change Name </button>
//       <Person name={personState.name}></Person>
//       <Person name="Ravi">My Hobby is: Coding</Person>
//       </div>
//     );
// }
export default App;
  
// function App() {
//   return (
//     <> 
//     <div className="App">
//       <h1>Welcome to React</h1>
//     </div>
//     </>
//   );
// }

