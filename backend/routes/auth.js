const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
const User = require("../models/User");
const Enrollment = require("../models/Enrollment");

// Signup route
router.post("/signup", async (req, res) => {
  const { phone_number, password, name, domains } = req.body;

  if (!phone_number || !password || !name || !domains) {
    return res.status(400).json({ error: "Please enter all fields" });
  }

  if (domains.length > 3) {
    return res
      .status(400)
      .json({ error: "You can select up to 3 domains only" });
  }

  try {
    const user = await User.findOne({ phone_number });

    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      phone_number,
      password: hashedPassword,
      name,
      domains, // Added this line
    });

    await newUser.save();

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { phone_number, password } = req.body;

  try {
    // Find the user by phone number
    const user = await User.findOne({ phone_number });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the provided password matches the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // If login is successful, send user information in the response
    res.status(200).json({
      user: {
        name: user.name,
        phone_number: user.phone_number,
        domains: user.domains, // Include domains field in the response
      },
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
