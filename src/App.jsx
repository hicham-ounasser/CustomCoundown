import React from "react";
import VideoBackground from "./components/VideoBackground";
import CountdownContainer from "./components/CountdownContainer";
import Countdown from "./components/Countdown";
import "./App.css";

function App() {
  return (
    <>
      <Countdown />

      <VideoBackground />
    </>
  );
}

export default App;
