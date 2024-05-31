const express = require("express");
const router = express.Router();
const auth = require("../middleware/Auth");

router.get("/me", auth, (req, res) => {
  res.status(200).json({ name: req.user.name });
});

module.exports = router;
