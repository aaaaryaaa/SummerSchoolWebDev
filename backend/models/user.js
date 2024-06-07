const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  phone_number: { type: String, required: true },
  password: { type: String, required: true },
  name: String,
  domains: { type: [String], required: true },
});

module.exports = mongoose.model("User", userSchema);
