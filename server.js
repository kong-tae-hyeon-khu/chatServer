const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server, { path: "/socket.io" });

app.get("/", (req, res) => {
  res.send("Hello");
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

io.on("client_msg", (msg) => {
  console.log(`클라이언트에서 보낸 메시지 수신 : ${msg}`);
});

server.listen(3000, () => {
  console.log("Listening on Port 3000");
});
