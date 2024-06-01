require("dotenv").config();

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes/routes')

const app = express();

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use("/api", routes); // Mount the general routes
app.use("/api/auth", authRoutes); // Mount the auth routes

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
