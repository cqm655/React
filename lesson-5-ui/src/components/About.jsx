import React from "react";
import {Link} from "react-router-dom";

export default function About() {
    return (
        <div className="about">
             <nav>
        <Link to="/">Main</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        </nav> 
            <h3>About Page</h3>
        </div>
    );
}