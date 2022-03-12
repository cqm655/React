import React from 'react';

const Person = ({person}) => {
    function addFriend (friend) {
        let friendArr = JSON.parse(localStorage.getItem('friends')) || [];
        
        if(!friendArr.some(f => f.id === friend.id)) {
            friendArr.push(friend);
        }

        localStorage.setItem('friends', JSON.stringify(friendArr));
    }

    return (
        <div className="person border p-3 m-2 d-flex flex-column">
            {person.name}
            <div className="avatar">
        <img src={person.img} alt="" className="ava"/>
        </div>
            <button onClick={() => addFriend(person)} className='btn btn-success'>Add Friend</button>
        </div>
    );
}
 
export default Person;