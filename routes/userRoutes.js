const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  res.json({ message: "Register the User" });
});

router.post("/login", (req, res) => {
  res.json({ message: "Login the User" });
});

router.get("/current", (req, res) => {
  res.json({ message: "Current User information." });
});

module.exports = router;