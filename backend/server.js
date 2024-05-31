require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const routes = require("./routes/routes");
require("./models/user");
require("./services/passport");

const app = express();

// Middleware for logging requests
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// Middleware for parsing JSON
app.use(express.json());

// Middleware for session management
app.use(
  session({
    secret: process.env.SESSION_SECRET || "default_secret",
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize Passport and use session middleware
app.use(passport.initialize());
app.use(passport.session());

// API routes
app.use("/api/progress", routes);
require("./routes/auth")(app);

// Connect to MongoDB and start the server
const port = process.env.PORT || 4000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log("Connected to DB & listening on port", port);
    });
  })
  .catch((error) => {
    console.log(error);
  });
