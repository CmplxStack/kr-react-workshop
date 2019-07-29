import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + "/KRIcon.png"} className="App-logo" alt="logo" />
      </header>
    </div>
  );
};
export default App;
