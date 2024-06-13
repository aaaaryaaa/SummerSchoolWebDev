const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
const User = require("../models/user"); // Adjust as per your actual user model
const Enrollment = require("../models/Enrollment");

// Signup route
router.post("/signup", async (req, res, next) => {
  const { phone_number, password, name, domains } = req.body;

  // Check if all fields are provided
  if (!phone_number || !password || !name || !domains) {
    return res.status(400).json({ error: "Please enter all fields" });
  }

  // Check if domains exceed the limit
  if (domains.length > 3) {
    return res
      .status(400)
      .json({ error: "You can select up to 3 domains only" });
  }

  try {
    // Check if the user is already registered
    const user = await User.findOne({ phone_number });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Check if the user is enrolled
    const enrolledUser = await Enrollment.findOne({ phone_number });
    if (!enrolledUser) {
      return res
        .status(400)
        .json({ error: "Please enroll first before signing up" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      phone_number,
      password: hashedPassword,
      name,
      domains,
    });

    // Save the user to the database
    await newUser.save();

    // Log in the user after successful signup
    req.login(newUser, (err) => {
      if (err) {
        return next(err);
      }
      return res
        .status(201)
        .json({ message: "User registered successfully", user: newUser });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});
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
