import "./App.css";
import { useState } from "react";

function App() {
  const [greeting, setgreeting] = useState("Greeting Message");

  const สวัสดี = () => {
    setgreeting("สวัสดี");
  };
  const Hi = () => {
    setgreeting("Hi!");
  };
  const 你好 = () => {
    setgreeting("你好!");
  };

  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="buttons">
        <button onClick={สวัสดี}>สวัสดี!</button>
        <button onClick={Hi}>Hi!</button>
        <button onClick={你好}>你好!</button>
      </div>
    </div>
  );
}

export default App;
