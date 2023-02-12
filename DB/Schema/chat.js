const mongoose = require("mongoose");

var user = require("./User");
user = mongoose.model("users", user);

const chatSchema = {
  id: mongoose.Schema.Types.ObjectId,
  chatBy: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  contents: String,
};

module.exports = chatSchema;
