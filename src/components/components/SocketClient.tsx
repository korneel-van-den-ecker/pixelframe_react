import React, { useEffect } from "react";

import socketIOClient from "socket.io-client";
const CLIENT = "http://192.168.1.110:5000";

const SocketClient = () => {
  /* useEffect(() => {
    const socket = socketIOClient(CLIENT);
    socket.emit("PixelframeTekst", {
        tekst: "Test Message",
        tekstKleur: { r: 255, g: 0, b: 0, brightness: "5" },
        achertergrondkleur: { r: 0, g: 255, b: 0, brightness: "5" },
    });
  }, []); */
  useEffect(() => {
    const socket = socketIOClient(CLIENT);
    socket.emit("PixelframeTekst", {
        tekst: "Test Message",
        tekstKleur: { r: 255, g: 255, b: 0, bright: "5"},
        achertergrondkleur: { r: 255, g: 0, b: 255, bright: "5" },
    });
  }, []);
  return <div></div>;
};

export default SocketClient;
