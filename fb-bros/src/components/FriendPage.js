import React, { useState } from "react";
import { useParams } from "react-router-dom";

const FriendPage = () => {
  const { id } = useParams();
  const [friends, setFriends] = useState(
    JSON.parse(localStorage.getItem("friends"))
  );
  const [friend, setFriend] = useState(
    friends.filter((bro) => bro.id === Number(id))[0]
  );

  function delFriend() {
    let temp = friends.filter((f) => f.id !== Number(id));

    localStorage.setItem("friends", JSON.stringify(temp));
    document.location.href = "/";
  }


  return (
    <div className="friend-page">
      <div className="avatar">
        <img src={friend.img} alt="" className="ava" />
      </div>
      
      <h1>{friend.name}</h1>

      <button onClick={() => delFriend()} className="btn btn-danger">
        Delete Friend
      </button>
     
     
    </div>
  );
};

export default FriendPage;
