const mongoose = require("mongoose");
const { Schema } = mongoose;

const registrationSchema = new Schema({
  phone_number: { type: String, required: true, unique: true },
  name: String,
  email: String,
  domains: [String],
});

// Exporting the model properly
module.exports = mongoose.model("Registration", registrationSchema);
