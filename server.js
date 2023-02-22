const express = require("express");
const { mongo, default: mongoose } = require("mongoose");
const app = express();

const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server, {
  path: "/socket.io",
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Client 연결.
io.on("connection", (socket) => {
  // Client Message 수신.
  socket.on("message", (msg) => {
    console.log(msg);
  });
});

server.listen(8000, () => {
  console.log("Listening on Port 8000");
});

// MongoDB Connection
const mongooseConnection = require("./DB/mongoose");
mongooseConnection();

// User Schema
let users = require("./DB/Schema/User");
users = mongoose.model("users", users);

let chats = require("./DB/Schema/Chat");
chats = mongoose.model("chats", chats);

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

// User Chat (채팅)
// 1. 임시 고정된 기본 유저 (공태현.)
app.post("/api/user/chat", (req, res) => {
  let body = req.body;

  users.findOne({ name: "공태현" }, (err, doc) => {
    let newChat = new chats({
      chatter: doc._id,
      contents: body.chat,
    });
    newChat
      .save()
      .then(console.log("Save Chat"))
      .catch((err) => {
        console.log(err);
      });
  });

  res.sendStatus(200);
});
