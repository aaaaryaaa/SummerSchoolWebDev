const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const Registration = require("../models/registration");
const Enrollment = require("../models/Enrollment");

router.post("/signup", async (req, res) => {
  const { phone_number, password, name } = req.body;

  try {
    // Check if the phone number exists in the enrollment database
    const enrolledUser = await Enrollment.findOne({ phone_number });
    if (!enrolledUser) {
      return res
        .status(400)
        .json({ error: "Please enroll first before signing up" });
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user record
    const newUser = new Registration({
      phone_number,
      password: hashedPassword,
      name,
    });

    // Save the user record to the database
    await newUser.save();

    // User successfully signed up
    res.status(201).json({
      message: "User signed up successfully",
      user: { phone_number, name },
    });
  } catch (error) {
    console.error("Error during sign up:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
