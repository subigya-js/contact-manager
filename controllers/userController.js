const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

//@desc Register a new user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  const userAvailable = await User.findOne({ email });

  if (userAvailable) {
    res.status(400);
    throw new Error("User already exists.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data.");
  }

  res.json({ message: "Register a new User" });
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
