const express = require("express");
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
