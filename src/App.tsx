import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import PixelFrameContainer from "./components/features/PixelFrame/PixelFrameContainer";
import LiveEditor from "./components/features/LiveEditor/LiveEditor";

function App() {  
  return (
  <React.Fragment>
    <PixelFrameContainer></PixelFrameContainer>
    <LiveEditor></LiveEditor>
  </React.Fragment>
  )
}
export default App;
