import React, {useContext} from 'react';
import {Ctx} from './PeopleCtx';
import Person from './Person';

const People = () => {
    const [people, setPeople] = useContext(Ctx);

    return (
        <div className="People">
            <h1>People</h1>
            <div  className="row">
                    <div class="coll" style={{display: 'flex'}}>
                    {
                    people.map(person => (
                        <Person key={person.id} person={person} />
                    ))
                    
                }
                    </div>
            </div>
        </div>
    );
}
 
export default People;