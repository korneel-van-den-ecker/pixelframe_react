import React, { MouseEvent } from "react";
import { Button, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


export type PixelProps = {
  color: string;
  brightness: number;
  onClickHandler:(event:MouseEvent<HTMLButtonElement>)=>void
};


const useStyles = makeStyles({
  btn: {
    width: 100,
    height: 10,
  },
});

const Pixel = ({ color, brightness,onClickHandler }: PixelProps) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.btn}
      style={{ background: color }}
      onClick={(e)=>onClickHandler(e)}
    ></Button>
    //<Input style={{"background":color}} type={"color"} ></Input>
  );
};

export default Pixel;
