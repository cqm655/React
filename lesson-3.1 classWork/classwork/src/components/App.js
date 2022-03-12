import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [total, setTotal] = useState("");
  const [op, seOp] = useState("");

  function handleChange1(e) {
    setNum1(e.target.value);
  }
  function handleChange2(e) {
    setNum2(e.target.value);
  }
  function handleSubmitSum(e) {
    setTotal(Number(num1) + Number(num2));
    e.preventDefault(); // prevent reseting to default
    setNum1((e.target.value = ''));
    setNum2((e.target.value = ''));
  }
  function handleSubmitMin(e) {
    setTotal(Number(num1) - Number(num2));
    e.preventDefault(); // prevent reseting to default
    setNum1((e.target.value = ''));
    setNum2((e.target.value = ''));
  }

  function handleSubmitMultiply(e) {
    setTotal(Number(num1) * Number(num2));
    e.preventDefault(); // prevent reseting to default
    setNum1((e.target.value = ''));
    setNum2((e.target.value = ''));
  }

  function handleSubmitDivision(e) {
    setTotal(Number(num1) / Number(num2));
    e.preventDefault(); // prevent reseting to default
    setNum1((e.target.value = ''));
    setNum2((e.target.value = ''));
  }

  function result(){
    <div className="result">
        <h2> Result is: {total}</h2> 
      </div>
  }

  return (
    <div className="calculator">
      <form className="values">
        <input
          className="input"
          type="number"
          value={num1}
          onChange={handleChange1}
          placeholder="0"
        />

        <input
          className="input"
          type="number"
          value={num2}
          onChange={handleChange2}
          placeholder="0"
        />
      </form>
      <div className="operands">
      <form onSubmit={handleSubmitSum} className="submit">
        <input className="sum" type="submit" value="Sum" />
      </form>
      <form onSubmit={handleSubmitMin} className="submit">
        <input className="sum" type="submit" value="Minus" />
      </form>
      <form onSubmit={handleSubmitMultiply} className="submit">
        <input className="sum" type="submit" value="Multiplay" />
      </form>
      <form onSubmit={handleSubmitDivision} className="submit">
        <input className="sum" type="submit" value="Division" />
      </form>
     <div className="result">
        <h2> Result is: {total}</h2> 
      </div>
      
      </div>
      
    </div>
  );
}

export default App;
