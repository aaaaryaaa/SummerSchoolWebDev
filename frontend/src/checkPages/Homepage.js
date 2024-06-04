// src/checkPages/Homepage.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = ({ user, setUser }) => {
  const navigate = useNavigate();
  //console.log(user.user.name);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  const handleWeek1 = () => {
    navigate("/week1")
  }

  const handleWeek2 = () => {
    navigate("/week2")
  }

  const handleWeek3 = () => {
    navigate("/week3")
  }

  const handleWeek4 = () => {
    navigate("/week4")
  }

  return (
    <div>
      <h1>Homepage</h1>
      {user ? (
        <div className="">
          <h2>Welcome, {user.user.name}</h2>
          <h1>BIGG TREEE OR SOMETHING</h1>
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
