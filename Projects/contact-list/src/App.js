import React, { Component, useEffect, useState } from "react";
import ContactCard from "./Component/contactCard/contactCard";
import axios from "axios"
const App = () => {
  const [user,setUser]=useState({});
  useEffect(()=>{
    getData();
  },[])

  
  const getData = async () => {
    const { data } = await axios.get("https://randomuser.me/api/?results=500")
    const tmpUser=[];
    // console.log(data .results);
    data.results.map((res)=>{
        const obj={
          name:res.name.first+' '+res.name.last,
          age:res.dob.age,
          email:res.email,
          avatar:res.picture.large
        }
        tmpUser.push(obj);
    })
    setUser(tmpUser);
  };
  let displayContact = null;
  if(user.length>0){
    displayContact =  user.map((data,index)=>{
                        return (
                        <ContactCard 
                          key={index} 
                          name={data.name} 
                          email={data.email}
                          age={data.age}
                          avatar={data.avatar}
                          />
                          );
                      })
  }
  return (
    
    <div style={{
      "display":"flex",
      "flexDirection":"row",
      "flexWrap":"wrap",
      "justifyContent":"space-evenly"
    }}>
      
      {displayContact}
    </div>
  );
}

export default App;


