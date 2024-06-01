const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
  phone_number: { type: String, required: true, unique: true},
  Name: {
    type: String,
    required: true,
  },
});

const Enrollment = mongoose.model("Enrollment", enrollmentSchema);

module.exports = Enrollment;
