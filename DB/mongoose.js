// For Mongoose Connection
require("dotenv").config();
const MONGODB_URI = process.env.MONGODB_URI;

const mongoose = require("mongoose");

const connection = () => {
  mongoose.set("strictQuery", true);
  mongoose.connect(MONGODB_URI, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("MongoDB connect");
    }
  });
};

module.exports = connection;
