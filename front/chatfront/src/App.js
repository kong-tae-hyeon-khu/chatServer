import "./App.css";
import { io } from "socket.io-client";

function App() {
  // For Socket Connection (Client Side)
  const socket = io.connect("http://127.0.0.1:3000", {
    path: "/socket.io",
    transports: ["websocket"],
  });

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

  // # 서버가 보낸 "사용자정의 이벤트" 처리: 매개변수로 들어온 데이터를 받아서 처리한다.
  socket.on("server_msg", (data) => {
    console.log(`서버에게 받은 메시지: ${data}`);
  });

  return (
    <div className="App">
      <header className="App-header">??</header>
      <div>
        <button>Input</button>
      </div>
    </div>
  );
}

export default App;
