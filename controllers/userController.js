const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//@desc Register a new user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  const userAvailable = await User.create({
    username,
    email,
    password,
  });

  if (userAvailable) {
    res.status(400);
    throw new Error("User already exists.");
  }

  console.log("User created successfully.");
  res.status(201).json({ user });
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
