import React, { useEffect } from "react";
import PixelFrame from "./PixelFrame";
import { init, selectPixelframe } from "./PixelFrameSlice";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@material-ui/core";

const PixelFramContainer = () => {
  const dispatch = useDispatch();
  const { pixelFrame } = useSelector(selectPixelframe);
  useEffect(() => {
    dispatch(init({ width: 16, heigth: 16 }));
  }, []);
  return pixelFrame === "loading" ? (
    <CircularProgress></CircularProgress>
  ) : (
    <PixelFrame pixelArray={pixelFrame}></PixelFrame>
  );
};

export default PixelFramContainer;
