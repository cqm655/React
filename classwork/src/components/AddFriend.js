import React, { useContext } from "react";
import {Ctx} from "./Data";

const AddFriend = () => {

const [friend, setFriend] = useContext(Ctx);

    return(
       <div className="addFriend">
           <h1>People you may know:</h1>
           { people.map(person => (
                        <Person key={person.id} person={person} />
                    ))}
       </div>
    );
}