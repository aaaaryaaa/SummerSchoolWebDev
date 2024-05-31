import React, { useState, useEffect } from "react";
import axios from "axios";

const Homepage = () => {
  const [isSignup, setIsSignup] = useState(false); // Toggle between login and signup
  const [phone_number, setphone_number] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get(
            "http://localhost:6000/api/user/me",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setUserName(response.data.name);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:6000/api/auth/signup",
        {
          phone_number,
          password,
          name,
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:6000/api/auth/login",
        {
          phone_number,
          password,
        }
      );
      localStorage.setItem("token", response.data.token);
      setUserName(response.data.name);
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <div>
      {userName ? (
        <h1>Welcome, {userName}!</h1>
      ) : (
        <div>
          <h2>{isSignup ? "Sign Up" : "Login"}</h2>
          <form onSubmit={isSignup ? handleSignup : handleLogin}>
            <div>
              <label>Phone Number:</label>
              <input
                type="text"
                value={phone_number}
                onChange={(e) => setphone_number(e.target.value)}
                required
              />
            </div>
            {isSignup && (
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
          </form>
          <p>{message}</p>
          <button onClick={() => setIsSignup(!isSignup)}>
            {isSignup
              ? "Already have an account? Login"
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Homepage;
