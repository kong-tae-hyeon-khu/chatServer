const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: String,
  // messages: 참조.
  chat: Array,
});

module.exports = userSchema;
