import React, { useEffect, useContext, useState } from "react";
//import socket from "../../components/SocketContext";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
//import { WebSocketContext } from '../../components/Websocket'
import { SocketContext } from "../../components/SocketContext";
import { Button } from "@material-ui/core";
import ColorPicker from "../../components/ColorPicker";
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
  const ws = useContext(SocketContext);
  const [tekst, setTekst] = useState("");
  const [kleur, setKleur] = useState("");
  const [bright,setbright] = useState(0)
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTekst(event.target.value);
  };
  useEffect(() => {}, []);

  const onClickHandler = () => {
    ws.send(tekst,kleur,bright);
  };
  const onChangeColorHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKleur(event.target.value);
  };
  const onChangeBrightnessHandler = (val: number)=>{
    setbright(val)
  }

  return (
    <React.Fragment>
      <ColorPicker
        color={kleur}
        brightness={bright}
        onChangeColorHandler={onChangeColorHandler}
        onChangeBrightnessHandler={onChangeBrightnessHandler}
      ></ColorPicker>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          onChange={handleTextChange}
          id="standard-basic"
          label="Message to send"
        />
        <Button onClick={onClickHandler}>verzenden</Button>
      </form>
    </React.Fragment>
  );
};

export default MessageService;
