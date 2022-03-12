import React, { useState } from "react";
// import ClassCounter from "./components/ClassCounter";
import Main from "./components/Main";
import AppInput from "./components/AppInput";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([]); //declarare tablou, unde vom salva taskurile

  function getInput(task) {
    console.log(task);

    const newtask = {
      id: Date.now(),
      task,
    }

    setTasks([newtask, ... tasks]); //adaugam in array
    console.log(tasks);
  }

  return (
    <div className="App">
      {/* <Main /> */}
      <AppInput getInput={getInput} />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
