import React, {useRef} from "react";
import classes from  "./Input.module.css";


const Input = React.forwardRef( (props, ref) => { //ordinea conteaza!!!, mai intii props, apoi ref
    return (
       <input ref={ref}  {...props} className={classes.input}/>
    );
});

export default Input;