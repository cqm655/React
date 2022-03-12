import React, {useState} from "react"; /* useState ne permite sa modificam valoarea la ecran*/ 
import Main from "./main";

function App() {

const [age, setAge] = useState(19);  //din prima age = citim valoarea, setAge = ii dam valoarea
//initializam app, mai intii o importam, vorbim de Main

function changeAge(myAge){
  setAge(myAge+1);
}
  return (
    <div className="App">
     <Main ageMain={age}  changeAgeMain={changeAge}/>   
    </div>
  );
}

export default App;
