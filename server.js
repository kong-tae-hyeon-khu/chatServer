const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server, { path: "/socket.io" });

io.on("connection", (socket) => {
  console.log("a user connected");
});

// Front Page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(3000, () => {
  console.log("Listening on Port 3000");
});
