import React from "react";
import { Link } from "react-router-dom";
import Main from "./Main";



const Header =() => {
    return(
 <div className="header">
      <Link to="/" element={<Main/>}></Link>
      <p>HOME</p>
   </div>
    );
  
}

export default Header;