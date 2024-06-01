const mongoose = require("mongoose");
const { Schema } = mongoose;

const registrationSchema = new Schema({
  phone_number: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Registration", registrationSchema);
