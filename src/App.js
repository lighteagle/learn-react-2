import React from "react";

import logo from "./logo.svg";
import "./App.css";

import Greeting from "./components/greeting";
import ImageAlbum from "./components/imageAlbum";
import gambar from "./assets/logos/komodo.jpeg";
import StateClass from "./components/stateClass";

function App() {
  return (
    <div className="App">
      {/*  ini components */}
      {/* <Greeting name="komodo" />
      <ImageAlbum imageSrc={gambar} /> */}
      <StateClass />
    </div>
  );
}

export default App;
