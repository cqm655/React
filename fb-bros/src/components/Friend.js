import React, { useState } from "react";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  return (
    <div className="friend border p-3 m-2 d-flex flex-column">
      {friend.name}
      <div  class="row">
        <div class="coll-sm">
          <div className="avatar">
            <img src={friend.img} alt="" className="ava" />
          </div>
          <Link to={`/${friend.id}`}>
          <button className="btn btn-dark">View Page</button>
        </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Friend;
