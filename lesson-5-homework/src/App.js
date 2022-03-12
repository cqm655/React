import React, { useRef, useContext } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import { Link } from "react-router-dom";
import Index from "./index.css";
import About from "./components/About";


function App() {
  const name = useRef(null);
  const surname = useRef(null);
  const age = useRef(null);
  const email = useRef(null);


 

  const handleClick = () => {
    window.open("/About");
  };

  return (
    <div className="App">
      <div>
        <nav className="nav">
          <Link to="/About">About</Link>
          <Link to="/">Main</Link>
        </nav>
      </div>
      <form className="form">
      <Input ref={name} type="text" placeholder="Insert name..." />
      <br />
      <Input ref={surname} type="text" placeholder="Insert surname..." />
      <br />
      <Input ref={age} type="number" placeholder="Insert age..." />
      <br />
      <Input ref={email} type="text" placeholder="Insert email..." />
      </form>
      <br />
      <Button onClick={()=>{ 
                             console.log("name= " + name.current.value);
                             console.log("surname= " + surname.current.value);
                             console.log("age= " + age.current.value);
                             console.log("email= " + email.current.value); 
                                          handleClick()}}>Submit</Button>
    </div>
  );
}

export default App;
