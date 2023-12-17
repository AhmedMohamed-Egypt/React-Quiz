import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";

const data = [
  { name: "ahmed", age: 35 },
  { name: "reham", age: 25 },
  { name: "sedra", age: 2 },
  { name: "hadeer", age: 27 },
  { name: "ahmed", age: 35 },
  { name: "reham", age: 25 },
  { name: "sedra", age: 2 },
  { name: "hadeer", age: 27 },
];

function AppProvider({ children }) {
 
   
  //  const [myNames,setMyNames] = useState([])
    const handleNames=()=>{
       // setMyNames([...data])
    }
 const    myNames=data

 

  return (
    <AppContext.Provider value={{ myNames, handleNames }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
