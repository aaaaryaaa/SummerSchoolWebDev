require("dotenv").config();
const fs = require("fs");
const csv = require("csv-parser");
const mongoose = require("mongoose");
const Registration = require("./models/registration"); // Importing the registration model with lowercase "r"

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    // Read data from CSV file
    fs.createReadStream("summerschool.csv")
      .pipe(csv())
      .on("data", async (data) => {
        try {
          // Create a new Registration document
          const registration = new Registration({
            phone_number: data.phone_number,
            name: data.name,
            email: data.email,
            domains: data.domains ? data.domains.split(",") : [],
          });
          // Save the Registration document to MongoDB
          await registration.save();
          console.log(
            `Saved registration with phone number ${data.phone_number}`
          );
        } catch (error) {
          console.error("Error saving registration:", error);
        }
      })
      .on("end", () => {
        console.log("CSV file successfully processed");
        // Disconnect from MongoDB after processing
        mongoose.disconnect();
      });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
