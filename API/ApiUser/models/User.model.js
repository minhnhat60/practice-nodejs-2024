const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  deleted: Boolean
});

const User = mongoose.model("User", UserSchema, "users");

module.exports = User;