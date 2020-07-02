import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import PixelFrameContainer from "./components/features/PixelFrame/PixelFrameContainer";
import LiveEditor from "./components/features/LiveEditor/LiveEditor";
//import socket from './components/components/SocketContext';
import MessageService from '../src/components/features/MessageService/MessageService'



function App() {  

  useEffect(()=>{
    /* socket.emit("PixelframeTekst", {
      tekst: "Test Message",
      tekstKleur: { r: 0, g: 0, b: 0, bright: "1" },
      achertergrondkleur: { r: 0, g: 255, b: 0, bright: "1"}}) */
  },[])

  return (
  <React.Fragment>
    <PixelFrameContainer></PixelFrameContainer>
    <LiveEditor></LiveEditor>
    <MessageService></MessageService>
  </React.Fragment>
  )
}
export default App;
