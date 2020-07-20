import React, { ChangeEvent } from "react";
import { Input, Button, Slider } from "@material-ui/core";
import BrightnessHighOutlinedIcon from "@material-ui/icons/BrightnessHighOutlined";
import BrightnessLowOutlinedIcon from "@material-ui/icons/BrightnessLowOutlined";

import { makeStyles } from "@material-ui/core/styles";
type ColorPickerProps = {
  color: string;
  onChangeColorHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeBrightnessHandler: (val: number) => void;
  brightness: number;
};

const useStyles = makeStyles({
    slider: {
      maxWidth: 100,
      marginRight:5,
      marginLeft:5,
    }
  });


const ColorPicker = ({
  color,
  onChangeColorHandler,
  brightness,
  onChangeBrightnessHandler,
}: ColorPickerProps) => {
    const classes = useStyles();
  return (
    <React.Fragment  >
      <Button style={{ display:"inline-block" }}>
        <Input
          value={color}
          style={{ width: 50 }}
          type={"color"}
          onChange={onChangeColorHandler}
        ></Input>
      </Button>
      <div style={{ display:"inline" }}>
      <BrightnessLowOutlinedIcon style={{ display:"inline-block" }}></BrightnessLowOutlinedIcon>
        <Slider
            className={classes.slider}
          value={brightness}
          min={0}
          max={31}
          style={{ display: "inline-block" }}
          valueLabelDisplay={"auto"}
          onChange={(e, val: number | number[]) =>
            onChangeBrightnessHandler(val as number)
          }
        ></Slider>
        <BrightnessHighOutlinedIcon
        style={{ display: "inline-block" }}
        ></BrightnessHighOutlinedIcon>
      </div>
        
    </React.Fragment>
  );
};

export default ColorPicker;
