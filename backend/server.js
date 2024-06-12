require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const routes = require("./routes/routes");
const authRoutes = require("./routes/auth"); // Make sure this points to your auth routes file
const path = require('path')
require("./config/passport")(passport); // Passport configuration

const app = express();

app.use(cors());
app.use(express.json());

// Express session
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use("/api/progress", routes); // Mount the general routes
app.use("/api/auth", authRoutes); // Mount the auth routes

app.use(express.static("../frontend/build"));
app.get("*", (req,res) => {
  // res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'))
  res.sendFile('../frontend/build/index.html', {root: __dirname});
})

const port = process.env.PORT || 3000;
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
