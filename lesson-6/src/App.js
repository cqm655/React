import React, { useContext, useState, createContext } from "react";
import Main from "./components/Main";
import Article from "./components/Article";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Valuectx from "./components/Valuectx";
import Page from "./components/Page";

export const ctx = createContext(); //cream o valoare pe care o vom putea transmite(un context)
//ca sa transmitem ne vom folosi de un provider
//ctx.provaider mereu are un value!   .Provaider obligatoriu
//in interiour provaiderului trebuie apelate componentele pe care le vom transmite
// useState [name, setName]

function App() {
  return (
    <div className="App">
      <Valuectx>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Article" element={<Article />} />
            <Route path="/Page" element={<Page />} />
          </Routes>
        </BrowserRouter>
      </Valuectx>
    </div>
  );
}

export default App;
