import React from "react";
import { Button } from "@material-ui/core";

export type PixelProps = {
    color: string;
    brightness: number;
  };


const Pixel = ({color,brightness}:PixelProps)=>{
    return(
        <Button style={{"background":color}}></Button>
    )
}

export default Pixel