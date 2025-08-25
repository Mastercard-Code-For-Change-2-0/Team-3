const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

// Remove any existing User model
try {
  mongoose.deleteModel('User');
} catch (error) {
  // Model doesn't exist yet
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please add a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    select: false  // Don't include password by default in queries
  },
  role: {
    type: String,
    enum: ["student", "clerk", "admin"],
    required: [true, "Please specify a role"],
  },
  isActive: {
    type: Boolean,
    default: true
  },
  lastLogin: Date
}, {
  timestamps: true,
  strict: true // This ensures no additional fields can be added
});

// Method to compare password
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("User", userSchema);