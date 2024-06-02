// src/checkPages/Login.js
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({
    phone_number: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        formData
      );
      const user = response.data; // Assuming the server returns the user object
      setUser(user);
      // console.log(user)

      navigate("/");
    } catch (error) {
      setMessage("An unexpected error occurred");
    }
  };

  const handleGoSignUp = async(e) => {
    navigate("/signup")
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="phone_number"
          placeholder="Phone Number"
          value={formData.phone_number}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
      <div>Not SignedUp? DO IT!<button onClick={handleGoSignUp}>SignUp</button></div>
    </div>
  );
};

export default Login;
