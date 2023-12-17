import React, { useContext } from "react";
import AppContext from "./AppContext";

import AppProvider from "./AppProvider";
import ListNames from "./ListNames";
import AddUser from "./AddUser";

function App() {
  return (
    <AppProvider>
      <Header />
      <AddUser/>
    </AppProvider>
  );
}

function Header() {
  const {myNames,handleNames} = useContext(AppContext)

 
  

  return (
    <>
       <button type="button" onClick={()=>{handleNames()}}>Show Names</button>
       {myNames.map((item,index)=><ListNames key={index} list={item}/>)}
    
    </>
   
  );
}

export default App;
