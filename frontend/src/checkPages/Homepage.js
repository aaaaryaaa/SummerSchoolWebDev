// src/checkPages/Homepage.js
import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

export default function Homepage({ user, setUser }) {
  return (
    <div>
      <h1>Homepage</h1>
      {user ? (
        <div>
          <h2>Welcome, {user.name}</h2>
        </div>
      ) : (
        <div>
          <h2>Please Login or Signup</h2>
          <Login setUser={setUser} />
          <Signup setUser={setUser} />
        </div>
      )}
      {/* Timeline and other content */}
    </div>
  );
}
