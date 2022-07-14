const mongoose = require("mongoose");

const User = mongoose.model("User", {
  username: String,
  password: String,
  ADM: Boolean,
});

module.exports = User;
