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
    minWidth:5,
    minHeight:5,
    width: 5,
    height: 5,
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
