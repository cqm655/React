import React, {useRef} from "react";

function AppInput({ getInput }) {

const form = useRef();

  return (
    <div className="app-input">
      <form ref={form} onSubmit={
          (e) => {
              e.preventDefault();
              getInput(form.current["task"].value);
              form.current["task"].value = "";
          }
      }>
        <input type="text" name="task" placeholder="task" />
        <br />
        <button type="submit">Set Task</button>
      </form>
    </div>
  );
}

export default AppInput;
