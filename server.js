const express = require("express");
const app = express();

const PORT = 8000;

const { Server } = require("socket.io");
const path = "/socket.io"; // 통신을 수행할 경로.
// 서버의 정보와 통신 경로를 넘겨준다.
const io = new Server(app, { path: path });

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(PORT, () => {
  console.log(`Listen on PORT : ${PORT}`);
});
