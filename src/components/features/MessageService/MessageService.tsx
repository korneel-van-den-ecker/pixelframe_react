import React, { useEffect, useContext, useState } from "react";
//import socket from "../../components/SocketContext";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
//import { WebSocketContext } from '../../components/Websocket'
import { SocketContext } from "../../components/SocketContext";
import { Button, Card, CardHeader, CardContent } from "@material-ui/core";
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
  const [tekstKleur, setTekstKleur] = useState("#ff0000");
  const [bright, setbright] = useState(5);
  const [bgKleur, setBgKleur] = useState("#000000");
  const [bgBright, setBgBright] = useState(5);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTekst(event.target.value);
  };
  useEffect(() => {}, []);

  const onClickHandler = () => {
    ws.sendMessage(tekst, tekstKleur, bright, bgKleur, bgBright);
  };
  const onChangeColorHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTekstKleur(event.target.value);
  };
  const onChangeBrightnessHandler = (val: number) => {
    setbright(val);
  };
  const onChangeBgColorHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBgKleur(event.target.value);
  };
  const onChangeBgBrightnessHandler = (val: number) => {
    setBgBright(val);
  };

  return (
    <React.Fragment>
      <Card variant="outlined">
        <h1>Message Service</h1>
        <CardContent>
          <ColorPicker
            color={tekstKleur}
            brightness={bright}
            onChangeColorHandler={onChangeColorHandler}
            onChangeBrightnessHandler={onChangeBrightnessHandler}
          ></ColorPicker>
          <ColorPicker
            color={bgKleur}
            brightness={bgBright}
            onChangeColorHandler={onChangeBgColorHandler}
            onChangeBrightnessHandler={onChangeBgBrightnessHandler}
          ></ColorPicker>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              onChange={handleTextChange}
              id="standard-basic"
              label="Message to send"
            />
            <Button onClick={onClickHandler}>verzenden</Button>
          </form>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default MessageService;
