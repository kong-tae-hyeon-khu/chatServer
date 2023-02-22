const mongoose = require("mongoose");

var user = require("./User");
user = mongoose.model("users", user);

const chatSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  chatter: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  contents: String,
  title: String,
});

module.exports = chatSchema;
