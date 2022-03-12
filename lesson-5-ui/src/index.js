import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom"; //ne permite sa navigam printre pagini, totul trebuie
                                                  // sa se afle in interiour la BrowserRouter!
import About from "./components/About";
import Contact from "./components/Contact";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes >
      <Route  path="/" element={<App />}/>
      <Route  path="/About" element={<About />}/>
      <Route  path="/Contact" element={<Contact />}/>
      <Route  path="*" element={<p>404</p>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


