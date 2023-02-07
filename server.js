const express = require("express");
const { mongo } = require("mongoose");
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

// User Register (회원가입)
app.post("/api/regist", (req, res) => {});
