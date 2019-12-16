import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React (even better, Vue.js)
        </a>
        <a
          className="App-link"
          href="https://vuejs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          (even better, Vue.js)
        </a>
      </header>
    </div>
  );
};

export default App;
