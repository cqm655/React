import React, {useState, createContext} from 'react';

export const Ctx = createContext();

const PeopleCtx = ({children}) => {
    const [people, setPeople] = useState([
        {
            id: 1,
            name: "Andrei",
            surname: "Spinu",
            email: "andrei@gmail.com",
            varsta: "30",
            adresa: "Chisinau"
        },
        {
            id: 2,
            name: "Ion",
            surname: "Candu",
            email: "vanea@gmail.com",
            varsta: "45",
            adresa: "Molovata"
        },
        {
            id: 3,
            name: "Ion",
            surname: "Ceban",
            email: "Ceban@gmail.com",
            varsta: "35",
            adresa: "Rezina"
        },
        {
            id: 4,
            name: "Vladimir",
            surname: "Voronin",
            email: "Vorona@gmail.com",
            varsta: "70",
            adresa: "Chisinau"
        },
        {
            id: 5,
            name: "Vlad",
            surname: "Plahotniuc",
            email: "Plaha@gmail.com",
            varsta:" 49",
            adresa: "Turcia"
        },
        {
            id: 6,
            name: "Constantin",
            surname: "Tutu",
            email: "hamham@gmail.com",
            varsta: "41",
            adresa: "Chisinau"
        },
        {
            id: 7,
            name: "Vanea",
            surname: "Furculita",
            email: "Tacim@gmail.com",
            varsta: "45",
            adresa: "Cahul",
            
            
        }]),

    return (
        <Ctx.Provider value={[people, setPeople]}>
            {children}
        </Ctx.Provider>
    );
}
 
export default PeopleCtx;