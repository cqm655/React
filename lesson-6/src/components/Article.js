import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
// prin ctx transmitem valoarea din App
// mai intii cream o valoare pentru a primi valoarea din provadierul App
//useContext  = hook, createContext - ne permite sa folosim variabila si sa o transmitem
// const[name, setName] aici obtinem atit variabila cat si metoda care o schimba


const Article = () => {

    return (
<main>
    <article>
        <h2>Article Page</h2>
        <Link to="/"></Link>
          <Link to="/Main"></Link>
    </article>
    
    
</main>
    );
}

export default Article;