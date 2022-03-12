import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useMemo, useRef, useReducer} from "react";

// let started = false;

// function complex(num){
//   for(let i=0; i<10000000; i++){}
//   return 5*num;
// }

const actions= {
increment: "increment",
decrement:"decrement",
reset: "reset"
}

function reducer(count, action ){
   switch(actions.type){
     case actions.increment : return count+1; break;
     case actions.decrement : return count-1; break;
     case actions.reset : count=0; return count;
     default: throw Error();
   }
}

function App() {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState(19);

  // const [person, setPerson] = useState({name: "", age: 18 });

  // const [info, setInfo] = useState(() => {
  //    console.log("start");
  // })

  // function increment(){
  //   setAge(prevAge => prevAge+1);
  // }

  // const [boolean, setBoolean] = useState(false);

  // useEffect(() => {
  //   if(started){
  //     if(boolean){
  //       document.title="Good Job"
  //     } else { document.title= "Try Again"}
  //   }
  //     },[boolean])  //functia va fi apelata cand variabila se va schimba

  // useEffect(() => {
  //   if(started){

  //   }else {
  //     started=true;
  //   }

  // }, [])  // useEffect la deschiderea paginii

  //----------------------------------useNemo

// const [number, setNumber] = useState(0);
// let complexNumber = useMemo(() => {complex(number)}, [number]);
// const [dark ,setDark] = useState(false);

// --------------------------------useRef--------
// const inputRef= useRef(null);
// const prevNumber = useRef();
// const prevPrevNumber = useRef();
// const prevPrevPrevNumber = useRef();
// const [number,setNumber] = useState(Math.round(Math.random() * 100));

// useEffect(()=> {
//   prevPrevPrevNumber.current = prevPrevNumber.current;
//   },[prevPrevNumber.current]
//   )
// useEffect(()=> {
// prevPrevNumber.current = prevNumber.current;
// },[prevNumber.current]
// )

// -------------------------------  useReduces --------------------

const [count, dispatch] = useReducer(reducer, 0);  //state denumirea acestui reducer, 0 valoara initiala
  return (
    <div className="App">

      {/* ---------------------useState */}
     {/* {name}
     <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
     {age}
     <button onClick={()=> increment()}>+</button> */}

{/* Name: {person.name}
<br />
Age: {person.age}
<br />
<input type="text" value={person.name} onChange={e => setPerson(prevObj=> {
  return {...prevObj, name: e.target.value}
})}/>
<br />
<input type="number" value={person.age} onChange={e => setPerson(prevObj => {
  return {...prevObj, age: e.target.value}
})
}/> */}
{/* --------------------------------useEffect------------------------ */}
{/* {boolean.toString()}
<button onClick={() => setBoolean(!boolean)}>Toggle</button>
 */}
 {/*--------------------------------useNemo------------------- */}
{/* <div style={{backgroundColor: dark ? "black" : "white", color: dark ? "white" : "black"}}>
                             
{number}
<input type="number" element={number} onChange={(e) => {
  
  setNumber(e.target.value);
  // complex();
  }} />
  <br />
 {complexNumber}
 <br />
 <button onClick={() => setDark(!dark)}>Dark/Light Mode</button></div> */}

 {/* -----------------------------------useRef------------------------------ */}
{/* <input type="text" ref={inputRef} />
<button onClick={() => {
// console.log(inputRef.current)
inputRef.current.focus();
inputRef.current.style.color="orange";
inputRef.current.style.height="100px";
}}>Focus</button>
<br />
Number: {number}
<br />
Previous Number: {prevNumber.current}
<br />
Prev prev number: {prevPrevNumber.current}
<br />
Prev prev prev number : {prevPrevPrevNumber.current}
<br />
<button onClick={() => {
  prevNumber.current = number;
  setNumber(Math.round(Math.random() * 100))
}
  }>Generate Number</button>
<br /> */}


{/* --------------------------------------- useReduces------- */}
{count}
<button onClick={() => dispatch({type: actions.increment})}>+</button>
<button onClick={() => dispatch({type: actions.decrement})}>-</button>
<button onClick={() => dispatch({type: actions.reset})}>reset</button>
    </div>
  );
}

export default App;
