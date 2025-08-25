const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const registerUser = async (req, res) => {
  try {
    console.log('Registration request body:', req.body);
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({ message: "Please fill all required fields" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    console.log('Creating new user with:', { email, role });
    const user = await User.create({
      email,
      password,
      role,
      isActive: true
    });

    res.status(201).json({
      success: true,
      user: {
        _id: user._id,
        email: user.email,
        role: user.role,
        token: generateToken(user._id)
      }
    });
  } catch (err) {
    console.error("Registration error:", err.message);
    console.error("Full error:", err);
    res.status(500).json({ 
      message: "Server error during registration",
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};

const loginUser = async (req, res) => {
  try {
    console.log('Login attempt with:', req.body);
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please provide email and password" });
    }

    // Find user and explicitly include password field
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found');
      return res.status(401).json({ message: "Invalid credentials" });
    }

    console.log('User found:', { email: user.email, role: user.role });

    // Get password directly from database
    const userWithPassword = await User.findOne({ email }).select('+password');
    if (!userWithPassword || !userWithPassword.password) {
      console.log('Password not found in database');
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare passwords using bcrypt directly
    const isMatch = await bcrypt.compare(password, userWithPassword.password);
    console.log('Password match result:', isMatch);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    const token = generateToken(user._id);
    console.log('Generated token for user');

    res.json({
      success: true,
      user: {
        _id: user._id,
        email: user.email,
        role: user.role,
        token: token
      }
    });
  } catch (err) {
    console.error("Login error details:", {
      message: err.message,
      stack: err.stack
    });
    res.status(500).json({ 
      message: "Server error during login",
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};

module.exports = { registerUser, loginUser };