
import React from "react";
import {useState} from "react";
import Counter from "./counter";

function App() {
  const [number,setNumber] = useState(0);

  function addTo(num){
    setNumber(num+1);
  }
  function substractFrom(num){
    setNumber(num-1);
  }
  function double(num){
    setNumber(num*num);
  }


  return (
    <div className="App">
     <h2>Counter 2.0</h2>
     <hr />
     <Counter number={number} addToFun = {addTo} substractFromFun = {substractFrom} doubleFun = {double}/>
    </div>
  );
}

export default App;
