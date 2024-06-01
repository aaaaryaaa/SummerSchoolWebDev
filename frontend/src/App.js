// src/App.js
import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "./checkPages/Homepage";
import Login from "./checkPages/Login";
import Signup from "./checkPages/Signup";
import Week1 from './checkPages/Week1';
import Week2 from './checkPages/Week2';
import Week3 from './checkPages/Week3';
import Week4 from './checkPages/Week4';

function App() {
  const [user, setUser] = useState();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage user={user} setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/week1" element={<Week1/>}></Route>
        <Route path="/week2" element={<Week2/>}></Route>
        <Route path="/week3" element={<Week3/>}></Route>
        <Route path="/week4" element={<Week4/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
