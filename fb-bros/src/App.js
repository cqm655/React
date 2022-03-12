import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PeopleCtx from "./components/PeopleCtx";
import People from "./components/People";
import Main from "./components/Main";
import FriendPage from "./components/FriendPage";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">Main</Link>
        &nbsp;
        <Link to="/people">People</Link>
        <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
      </nav>

      <PeopleCtx>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/people" element={<People />} />
          <Route path="/:id" element={<FriendPage />} />
        </Routes>
      </PeopleCtx>
    </Router>
  );
}

export default App;
