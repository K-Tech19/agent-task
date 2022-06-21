const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      // require: [true, "Please provide a user name signup"],
    },
    username: {
      type: String,
      require: [true, "Please provide a email to signup"],
    },
    timezone: {
      type: String,
    },
    email: {
      type: String,
      require: [true, "Please provide a valid email to signup"],
    },
    password: {
      type: String,
      // require: [true, "Please provide a password to signup"],
    },
    avatar: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
