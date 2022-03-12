import React, {useState,useEffect, useRef} from "react";
//use Effect folosim pentru evenimente care deja sau intimplat
const Page = () => {
//este folosit mereu inafara returnului
//mereu il apelam ca functie

// const [number, setNumber] = useState(1);
// const [numarDivCu5, setNumarDivCu5] = useState(false);

// //acest use efect este folosit la deschiderea siteului, [] la sfirsit 
// useEffect(()=>{
//     console.log("okey, let`s go!")
//    }, []);


// useEffect(()=> {
//     // if(number%2===0){
//     //     console.log("numar par")
//     // }
//     if(number%5 === 0){
//         setNumarDivCu5(true);
//     } else {
//         setNumarDivCu5(false);
//     }
// })

// useEffect(()=>{
// console.log("divizibil cu 5");
// },[numarDivCu5])


const [msg, setMsg] = useState();
const guess = useRef();  //useRef ne permite sa luam valori din input!!!
const [status, setStatus] = useState();
const [randomNumber, setRandomNumber] = useState();
let gameStarted = false;
 
function getGuess(number){
    if(parseInt(number) === randomNumber){
        console.log("guessed");
        setStatus(true);
    } else {
        console.log("non guessed!")
    }
}

useEffect(()=>{

})

useEffect(()=>{
    setMsg("Welcome to the Game");
    setRandomNumber(parseInt(Math.round(Math.random()*10)));

},[])


useEffect(()=>{
    if(status){
        setMsg("You Won!")
    } else {
        setMsg("You Lost!")
    }
}, [status])


    return (

<div className="page">
    {/* <h2>Page</h2>
    {number}
    <button onClick={()=>{setNumber(number+1)}}>Click me</button> */}
 <small>{msg}</small>
 <br />
 <input ref={guess} type="number" placeholder="Enter your guess.." /> 
 <button onClick={()=>getGuess(guess.current.value)}>Guess!</button>


</div>
    );
}

export default Page;