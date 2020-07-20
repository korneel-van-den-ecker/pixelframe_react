import React, { useEffect, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import PixelFrameContainer from "./components/features/PixelFrame/PixelFrameContainer";
import LiveEditor from "./components/features/LiveEditor/LiveEditor";
//import socket from './components/components/SocketContext';
import MessageService from '../src/components/features/MessageService/MessageService'
import {SocketContext} from "./components/components/SocketContext"



function App() {  
  const socket = useContext(SocketContext)
  useEffect(()=>{
    socket.init()
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
