import React, { useState, useRef } from "react";

const Main = () => {
  const [name, setName] = useState("");
  const inputName = useRef();
  const form = useRef();

  function getName() {
console.log(inputName.current.value);
setName(inputName.current.value); /// atribuirea unei variabile, unui hook
inputName.current.valuea ="";
  }

  const [name1, setName1] = useState("");
  const [age, setAge] = useState(0);
  function getFormData(event){
    event.preventDefault();

    setName1(form.current["name1"].value);
    setAge(form.current["age"].value);
}
  
  return (
    <div>
      {/* <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
<p>{ name }</p> */}
      {/* <input type="text" ref={inputName}/>
      <button onClick={() => {getName()} }>Get Name</button>
      <small>{name}</small> */}
      <form  ref={form} onSubmit={getFormData}>
          <label htmlFor="">Name</label>
          <input type="text"  name="name1" id="name1" placeholder="Insert..."/>         
          <br />
          <label htmlFor="">Age</label>
          <input type="number" name="age" id="age" placeholder="27"/>
          <br />
          <br />
          <button type="submit">Login</button>
          
      
      </form>
     {age}
     {name1}
    </div>
  );
};

export default Main;
