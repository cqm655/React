import React, {useRef, useContext} from "react"; //referinta la un element
import Button from "./components/UI/Button/Button";
import Input from "./components/UI/Input/Input";
import {Link} from "react-router-dom";





function App() {
  const name = useRef(null);
  const pass = useRef(null);
  const hello = "Hello!";

  return (

<div className="App" >
      <nav>
        <Link to="/">Main</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        </nav> 
       
      <Input ref={name} type="text" placeholder="Name"/> 
      <Input ref={pass} type="password" placeholder="Password"/>
       <Button onClick={()=> {console.log(name.current.value, pass.current.value)}}>
         LOGIN
       </Button>
    </div>

  );
}

export default App;
