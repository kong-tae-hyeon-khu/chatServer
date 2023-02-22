import "./App.css";
import { io } from "socket.io-client";
import React, { useState } from "react";

function App() {
  // For Socket Connection (Client Side)
  const socket = io.connect("http://127.0.0.1:8000");

  // # 연결(connect) 이벤트 처리
  socket.on("connect", () => {
    console.log("연결 성공");
  });

  // # 연결 해제(disconnect) 이벤트 처리
  socket.on("disconnect", (reason) => {
    console.log(reason);
    console.log("연결 종료");
  });

  // # 에러 발생(error) 이벤트 처리
  socket.on("error", (error) => {
    console.log(`에러 발생: ${error}`);
  });

  // # 서버가 보낸 "사용자정의 이벤트" 처리
  socket.on("server_msg", (data) => {
    console.log(`서버에게 받은 메시지: ${data}`);
  });

  // 메시지 전송 함수.
  const sendMessage = () => {
    console.log(message);
    socket.emit("message", message);
    socket.emit(message);
  };

  // useState (Input Value)
  const [message, setMessage] = useState("");
  const onChangeMessage = (event) => {
    event.preventDefault();
    setMessage(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">채팅</header>
      <div>
        <input onChange={onChangeMessage}></input>
      </div>
      <div>
        <button onClick={sendMessage}>전송</button>
      </div>
    </div>
  );
}

export default App;
