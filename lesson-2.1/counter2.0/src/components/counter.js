import React from "react";


function Counter(props) {
const number = props.number;
const addTo = props.addToFun;
const substractFrom = props.substractFromFun;
const double = props.doubleFun;

    return (
<div className="counter">
    <h2>Number: {
    {number} >= 0 ? <small style={{color: "green"}}>{number}</small> : <small style={{color: "blue"}}>{number}</small>
    }</h2>
    <button className="add" onClick={() => {addTo(number)}}>+1</button>
    <button className="substract" onClick={()=> {substractFrom(number)}}>-1</button>
    <button className="double" onClick={()=>{double(number)}}>Double</button>
</div>
    );
}

export default Counter;