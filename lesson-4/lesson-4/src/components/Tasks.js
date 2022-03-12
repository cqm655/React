import React from "react";

function Tasks(props) {
  return (
    <div className="tasks">
      {props.tasks.map((task, idx) => (  //folosim parantezele rotunde daca dorim sa afisam cod HTML
        <div className="task" key={task.id}>
          <small>{idx + 1} . </small>
          <p>{task.task}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Tasks;
