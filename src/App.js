import React from "react";

import logo from "./logo.svg";
import "./App.css";

import StateClass from "./components/stateClass";
import SimpleCounter from "./components/simpleCounter";

function App() {
  return (
    <div className="App">
      <StateClass />
      <SimpleCounter />
    </div>
  );
}

export default App;
