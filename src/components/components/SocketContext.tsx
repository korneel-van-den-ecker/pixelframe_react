import React, { createContext, useContext } from "react";
import {SocketService} from './SocketService'

export const SocketContext: React.Context<SocketService> = createContext(new SocketService())

    
    /* socket.emit("PixelframeTekst", {
      tekst: "Test Message",
      tekstKleur: { r: 0, g: 0, b: 0, bright: "1" },
      achertergrondkleur: { r: 0, g: 255, b: 0, bright: "1"},
    }); */


export const usePixelFrame = ()=> useContext(SocketContext)
