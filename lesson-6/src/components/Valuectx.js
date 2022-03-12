import React, {useState,createContext} from "react";
//variabila de useState pentru care putem schimba valoarea
export const Valctx = createContext();

 const Valuectx = (props) => {
     const [str, setStr] = useState("hello");
     const [name, setName] = useState("Balan");
     const [age,setAge] = useState("69");

    return (
<Valctx.Provider value={
    {
        str: [str,setStr],  //str si name sunt denumire date obiectelor, de noi, pentru a transmite mai mult obiecte
        name: [name,setName],
        age: [age,setAge]
    }}>
 {props.children}
</Valctx.Provider>
    );
}

export default Valuectx;