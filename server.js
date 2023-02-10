const express = require("express");
const { mongo, default: mongoose } = require("mongoose");
const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(PORT, () => {
  console.log(`Listen on PORT : ${PORT}`);
});

// MongoDB Connection
const mongooseConnection = require("./DB/mongoose");
mongooseConnection();

// User Schema
let users = require("./DB/Schema/User");
users = mongoose.model("users", users);
// For JSON Request parsing
app.use(express.json());

// User Register (회원가입)
app.post("/api/regist", (req, res) => {
  let newUserInfo = req.body;
  let newUser = new users({
    name: newUserInfo.name,
  });
  newUser
    .save()
    .then(console.log("Save User."))
    .catch((err) => {
      console.log(err);
    });
  res.sendStatus(200);
});
