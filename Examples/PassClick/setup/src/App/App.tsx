import "./App.css";
import React from "react";
import { Counter } from "./Components/Counter";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + "/KRIcon.png"} className="App-logo" alt="logo" />
      </header>
      <div>
        <Counter />
      </div>
    </div>
  );
};
export default App;
