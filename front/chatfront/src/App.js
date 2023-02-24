import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Router
import Chat from "./Chat";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
