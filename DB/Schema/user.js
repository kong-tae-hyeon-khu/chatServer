const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true, unique: true },
});

module.exports = userSchema;
