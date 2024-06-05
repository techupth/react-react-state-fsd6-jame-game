import "./App.css";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Greeting Message");

  const handlerThai = () => {
    setMessage("สวัสดี!");
  };
  const handlerEng = () => {
    setMessage("Hi!");
  };
  const handlerChina = () => {
    setMessage("你好!");
  };

  return (
    <div className="App">
      <div className="greeting-container">{message}</div>
      <div className="buttons">
        <button onClick={handlerThai}>สวัสดี!</button>
        <button onClick={handlerEng}>Hi!</button>
        <button onClick={handlerChina}>你好!</button>
      </div>
    </div>
  );
}

export default App;
