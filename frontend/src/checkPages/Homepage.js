// src/checkPages/Homepage.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = ({ user, setUser }) => {
  const navigate = useNavigate();
  console.log(user.user.name);
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
          <h2>Welcome, {user.user.name}</h2>
          <button onClick={handleLogout}>Logout</button>
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
