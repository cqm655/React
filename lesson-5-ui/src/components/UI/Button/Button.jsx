import React from "react";
import classes from "./Button.module.css";

const Button = ({children, ... props}) => {
    return (
<button {... props} className={classes.btn}>{children}</button> //prin props transmitem toate proprietatile
    );                                                          //deoarece nu stim ce vom transmite folosim props
}  

export default Button;