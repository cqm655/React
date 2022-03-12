import React, {useState} from 'react';
import Friend from './Friend';

const Main = () => {
    const [friends, setFriends] = useState(JSON.parse(localStorage.getItem('friends')) || []);

    return (
        <div className="Main">
            <h1>Friend List</h1>
            {
                friends.length > 0 ?
                <div style={{width: '300px'}} class="row">
                    <div class="coll-sm" style={{display: 'flex'}}>
                    {
                        friends.map(friend => <Friend key={friend.id} friend={friend} />)
                        
                    }
                    </div>
                   
                </div> :
                <h5>No friends</h5>
            }
        </div>
    );
}
 
export default Main;