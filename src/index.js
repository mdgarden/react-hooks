import React from "react";
import ReactDOM from "react-dom";
import { useDeviceOrientation } from "./Hooks/useDeviceOrientation";

import "./styles.css";

function App() {
  const { alpha, beta, gamma } = useDeviceOrientation();

  return (
    <div className="App">
      <h1>Hooks!</h1>
      <h2>useDeviceOrientation</h2>
      <ul>
        <li>Alpha: {alpha}</li>
        <li>Beta: {beta}</li>
        <li>Gamma: {gamma}</li>
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
