const mongoose = require("mongoose");
const { Schema } = mongoose;

const registrationSchema = new Schema({
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Registration", registrationSchema);
