import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [phone_number, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signup",
        {
          phone_number,
          password,
          name,
        }
      );

      if (response && response.data) {
        console.log("Signup successful:", response.data);
        // Handle successful signup (e.g., redirect to login page)
      } else {
        console.error("Unexpected response format:", response);
        setError("Unexpected response format.");
      }
    } catch (err) {
      if (err.response && err.response.data) {
        console.error("Signup error:", err.response.data);
        setError(err.response.data.error || "Signup failed.");
      } else {
        console.error("Signup error:", err);
        setError("Signup failed.");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Phone Number"
          value={phone_number}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Signup;
