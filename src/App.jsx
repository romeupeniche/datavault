import { useState } from "react";
import "./App.css";
import Header from "./components/main/Header";
import Home from "./pages/main/Home";
import Login from "./pages/main/Login";
import Messages from "./pages/main/Messages";
import Updates from "./pages/main/Updates";
import CountdownTimer from "./components/CountdownTimer";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <>
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      {currentPage == "login" && <Login setCurrentPage={setCurrentPage} />}
      {currentPage == "home" && <Home />}
      {currentPage == "messages" && <Messages />}
      {currentPage == "updates" && <Updates />}
    </>
  );
}

export default App;
