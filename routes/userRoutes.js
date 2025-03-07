const express = require("express");
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

router
  .post("/register", registerUser)
  .post("/login", loginUser)
  .get("/current", validateToken, currentUser);

module.exports = router;
