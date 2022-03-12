import React, {useState,useContext} from "react";
import {Link} from "react-router-dom";
import {Valctx} from "./Valuectx";
// prin ctx transmitem valoarea din App
// mai intii cream o valoare pentru a primi valoarea din provadierul App


const Main = () => {
 const {str, name, age} = useContext(Valctx);
 const [str1,setStr] = str;
 const [name1, setName] = name;
 const [age1, setAge] = age;
    return (
<main>
  <h2>Main Page</h2>
  <Link to="/" ></Link>
  <Link to="/Article" ></Link>
  {str1}
  {name1}
  {age1}
</main>
    );
}

export default Main;