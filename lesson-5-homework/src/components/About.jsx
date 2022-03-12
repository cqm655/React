import React from "react";
import {Link} from "react-router-dom";

export default function About(props) {
    const name = props.name;
    console.log(name);
    return (
        <div className="about">
             <nav>
        <Link to="/About">   About   </Link>
        <Link to="/">   Main  </Link>
        </nav> 
            <h3>About Page</h3>
            <div>{name}</div>
            
            
        </div>
    );
}