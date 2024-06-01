const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const Registration = require("../models/registration");
const Enrollment = require("../models/Enrollment");

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(
      { usernameField: "phone_number" },
      async (phone_number, password, done) => {
        try {
          // Check if user is enrolled
          const enrolledUser = await Enrollment.findOne({ phone_number });
          if (!enrolledUser) {
            return done(null, false, {
              message: "Please enroll first before signing up",
            });
          }

          // Check if user is registered
          const user = await Registration.findOne({ phone_number });
          if (!user) {
            return done(null, false, { message: "User not found" });
          }

          // Match password
          const isMatch = await bcrypt.compare(password, user.password);
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Incorrect password" });
          }
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await Registration.findById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
};
