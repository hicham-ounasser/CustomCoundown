import React from "react";
import VideoBackground from "./components/VideoBackground";
import CountdownContainer from "./components/CountdownContainer";
import Countdown from "./components/Countdown";
import Complete from "./components/Complete";
import "./App.css";

function App() {
  return (
    <>
      {/* <Countdown /> */}
      <CountdownContainer />
      {/* <Complete /> */}
      <VideoBackground />
    </>
  );
}

export default App;
