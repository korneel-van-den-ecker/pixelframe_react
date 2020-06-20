import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PixelFrame from "./components/features/PixelFrame/PixelFrame";

function App() {
  return (
    <PixelFrame
      pixelArray={[
        [
          { color: "red", brightness: 2 },
          { color: "blue", brightness: 2 },
          { color: "green", brightness: 2 },
        ],
        [
          { color: "red", brightness: 2 },
          { color: "blue", brightness: 2 },
          { color: "green", brightness: 2 },
        ],
      ]}
    ></PixelFrame>
  );
}

export default App;
