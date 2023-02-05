const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: String,
  // messages: 참조.
});

module.exports = mongoose.model("User", userSchema);
