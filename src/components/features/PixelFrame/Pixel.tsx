import React from "react";
import { Button, Input } from "@material-ui/core";

export type PixelProps = {
    color: string;
    brightness: number;
  };


const Pixel = ({color,brightness}:PixelProps)=>{
    return(
        //<Button style={{"background":color}}></Button>
        <Input style={{"background":color}} type={"color"} ></Input>
    )
}

export default Pixel