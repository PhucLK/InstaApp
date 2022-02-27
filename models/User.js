const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Name must be required"],
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Email must be required"],
    },
    password: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Password must be required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    address: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
