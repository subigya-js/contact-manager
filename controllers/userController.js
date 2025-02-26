const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//@desc Register a new user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register the User" });
});

// @desc Login a user
// @route POST /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login the User" });
});

// @desc Current user info
// @route GET /api/users/current
// @access private
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current User information." });
});

module.exports = { registerUser, loginUser, currentUser };
