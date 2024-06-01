const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
const Registration = require("../models/registration");
const Enrollment = require("../models/Enrollment");

// Signup route
router.post("/signup", async (req, res) => {
  const { phone_number, password } = req.body;

  // Validate request body
  if (!phone_number || !password) {
    return res
      .status(400)
      .json({ error: "phone_number and password are required" });
  }

  try {
    // Check if the phone_number already exists
    const existingUser = await Registration.findOne({ phone_number });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User with this phone_number already exists" });
    }

    

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user record
    const newUser = new Registration({
      phone_number,
      password: hashedPassword,
   
    });

    // Save the user record to the database
    await newUser.save();

    // User successfully signed up
    res.status(201).json({ message: "User signed up successfully" });
  } catch (error) {
    // Handle any errors
    console.error("Error during sign up:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


// Login route
router.post("/login", async (req, res) => {
  const { phone_number, password } = req.body;

  try {
    // Find the user by phone number
    const user = await Registration.findOne({ phone_number });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the provided password matches the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // If login is successful, send user information in the response
    res
      .status(200)
      .json({ user: { name: user.name, phone_number: user.phone_number } });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


module.exports = router;
