import React from "react";
import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Main from "./components/Main";

function App() {

    return(
         <div className="main">
             <Header/>
             <Routes>
                 <Route to="/" element={<Main/>}></Route>
             </Routes>
         </div>
    );
}

export default App;