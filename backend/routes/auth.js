const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const Registration = require("../models/registration");
const Enrollment = require("../models/Enrollment");

// Route for user sign up
router.post("/signup", async (req, res) => {
  const { phoneNumber, password, otherFields } = req.body;

  try {
    // Check if the phone number exists in the enrollment database
    const enrolledUser = await Enrollment.findOne({ phoneNumber });
    if (!enrolledUser) {
      // Phone number not found in enrollment database, return error message
      return res
        .status(400)
        .json({ error: "Please enroll first before signing up" });
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user record
    const newUser = new Registration({
      phoneNumber,
      password: hashedPassword,
      otherFields, // Include any other fields from the sign-up form
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

module.exports = router;
