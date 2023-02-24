import { io } from "socket.io-client";
import React, { useState, useEffect } from "react";

const Chat = () => {
  // For Socket Connection (Client Side)
  const socket = io.connect("http://127.0.0.1:8000");

  // Connect 관리 with UseEffect.
  const [isConnected, setIsConnected] = useState(socket.connected);
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connect Complete");
      setIsConnected(true);
    });
    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

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
  };

  // useState (Input Value)
  const [message, setMessage] = useState("");
  const onChangeMessage = (event) => {
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
};

export default Chat;
