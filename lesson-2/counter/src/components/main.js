import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React from "react";

function Main({ageMain, changeAgeMain}){

// const name = props.nameMain;
// const age = props.ageMain;

    return <main>
        <h2>
            Main
        </h2>
        <hr/>
        {ageMain}
        <br />
      
<button onClick={ () => {changeAgeMain(ageMain)}}>Plus to age</button>
    </main>
}

export default Main;