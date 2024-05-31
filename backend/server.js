require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const authRoutes = require("./routes/auth"); // Import the auth routes

const app = express();

app.use(express.json());

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use("/api", routes); // Mount the routes middleware
app.use("/api/auth", authRoutes); // Mount the auth routes

// Connect to MongoDB and start the server
const port = process.env.PORT || 6000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Server listening to PORT
    app.listen(port, () => {
      console.log("Connected to db & listening on port", port);
    });
  })
  .catch((error) => {
    console.log(error);
  });
