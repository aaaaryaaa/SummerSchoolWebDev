const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  phone_number: { type: String, required: true },
  password: { type: String, required: true },
  name: String,
  domains: {
    "DSA": { type: Boolean, default: false },
    "AI-ML": { type: Boolean, default: false },
    "Web Development": { type: Boolean, default: false },
    "App Development": { type: Boolean, default: false },
    "Design": { type: Boolean, default: false },
  },
});

module.exports = mongoose.model("User", userSchema);
