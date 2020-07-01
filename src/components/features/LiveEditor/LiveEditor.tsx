import React, { ChangeEvent } from "react";
import { Input, Button, Grid, Slider } from "@material-ui/core";
import ColorPicker from "../../components/ColorPicker";
import { selectLiveEditor, setSelectedColor, setSelectedBrightness } from "./LiveEditorSlice";
import { useSelector, useDispatch } from "react-redux";
import BrightnessHighOutlinedIcon from "@material-ui/icons/BrightnessHighOutlined";
import BrightnessLowOutlinedIcon from "@material-ui/icons/BrightnessLowOutlined";
import SocketClient from "../../components/SocketClient";
const LiveEditor = () => {
  const { selectedColor, selectedBrightness } = useSelector(selectLiveEditor);
  const dispatch = useDispatch();
  const onChangeColorHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectedColor({ color: e.target.value }));
  };

  const onChangeBrightnessHandler = (val:number|number[]) => {
    dispatch(setSelectedBrightness({brightness:val as number}))
  };
  return (
    <div>
      <SocketClient></SocketClient>
      <Grid container spacing={2} alignItems="center">      
      <Grid item>
        <ColorPicker
          color={selectedColor}
          onChangeHandler={onChangeColorHandler}
        ></ColorPicker>
      </Grid>
      <Grid item>
        <BrightnessLowOutlinedIcon></BrightnessLowOutlinedIcon>
      </Grid>
      <Grid item xs >
        <Slider
          value={selectedBrightness}
          min={0}
          max={31}
          valueLabelDisplay={"auto"}
          
          onChange={(e,val:number|number[])=>onChangeBrightnessHandler(val)}
        ></Slider>
      </Grid>
      <Grid item>
        <BrightnessHighOutlinedIcon></BrightnessHighOutlinedIcon>
      </Grid>
    </Grid>
    </div>
    
  );
};

export default LiveEditor;
