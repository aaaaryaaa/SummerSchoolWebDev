const mongoose = require("mongoose");
const Enrollment = require("./models/Enrollment");
const fs = require("fs");

// Connect to MongoDB database
mongoose.connect(
  "mongodb+srv://aarya:aarya1234@cluster0.nbudasn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Read enrollment data from JSON file
const enrollmentData = JSON.parse(
  fs.readFileSync("enrollmentData.json", "utf8")
);

// Insert enrollment data into database
Enrollment.insertMany(enrollmentData)
  .then(() => {
    console.log("Enrollment data uploaded successfully");
    mongoose.connection.close(); // Close the MongoDB connection
  })
  .catch((error) => {
    console.error("Error uploading enrollment data:", error);
    mongoose.connection.close(); // Close the MongoDB connection
  });
