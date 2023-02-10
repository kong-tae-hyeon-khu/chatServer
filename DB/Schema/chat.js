const users = require("./User");
users = mongoose.model("users", users);

const chatSchema = {
  id: mongoose.Schema.Types.ObjectId,
  chatBy: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  contents: String,
};

module.exports = chatSchema;
