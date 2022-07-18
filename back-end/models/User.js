const mongoose = require("mongoose");

const User = mongoose.model("User", {
  username: String,
  password: String,
  adm: Boolean,
});

module.exports = User;
