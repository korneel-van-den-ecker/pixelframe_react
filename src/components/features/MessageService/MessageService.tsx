import React, { useEffect, useContext } from "react";
//import socket from "../../components/SocketContext";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
//import { WebSocketContext } from '../../components/Websocket'
import {SocketContext} from '../../components/SocketContext'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

const MessageService = () => {
  const classes = useStyles();

  const ws = useContext(SocketContext)

  useEffect(() => {
     
       ws.init()
        ws.send("dheu")
     

   /*  socket.emit("PixelframeTekst", {
      tekst: "Test Message",
      tekstKleur: { r: 0, g: 0, b: 0, bright: "1" },
      achertergrondkleur: { r: 0, g: 255, b: 0, bright: "1" },
    }); */

  }, []);
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Message to send" />
    </form>
  );
};

export default  MessageService;