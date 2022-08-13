import React from 'react';
import Control from './Components/Control/Control'
function App() {
  const AppStyle={
    display: "flex",
    alignContent: "spaceEven",

  }
  return (
    <div className="App" style={AppStyle}>
     {/* <Button>+</Button> */}
     <Control tempType="Celsius"/>
     <Control tempType="Farhenhiet"/>
    </div>
  );
}

export default App;
