// routes/auth.js
const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = (app) => {
  app.post("/auth/signup", async (req, res) => {
    const { username, password, name, email } = req.body;
    try {
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).send({ message: "Username already exists." });
      }
      const user = new User({ username, password, name, email });
      await user.save();
      req.login(user, (err) => {
        if (err) {
          return res.status(500).send({ message: "Signup failed." });
        }
        return res.status(201).send(user);
      });
    } catch (error) {
      res.status(500).send({ message: "Signup failed." });
    }
  });

  app.post("/auth/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(400).send(info);
      }
      req.login(user, (err) => {
        if (err) {
          return res.status(500).send({ message: "Login failed." });
        }
        return res.status(200).send(user);
      });
    })(req, res, next);
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
