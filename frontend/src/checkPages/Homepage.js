// src/checkPages/Homepage.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

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
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/signup")}>Signup</button>
        </div>
      )}
    </div>
  );
};

export default Homepage;
