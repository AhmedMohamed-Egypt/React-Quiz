import { useContext, useState } from "react";
import AppContext from "./AppContext";
import App from "./App";

function AddUser() {
  const submitHanlder = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      age: age,
    };
    

    if(!myNames.map((item)=>item.name+item.age).includes(data.name+data.age)){
        setMyNames([...myNames,data])
    }else {
        setMyNames([...myNames])
        alert('You have added before ')
    }

    
  };
  const { myNames, ok, setMyNames } = useContext(AppContext);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  return (
    <div>
      <form onSubmit={submitHanlder}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddUser;
