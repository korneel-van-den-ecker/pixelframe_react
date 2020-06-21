import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import PixelFrame from "./components/features/PixelFrame/PixelFrame";
import {
  init,
  selectPixelframe,
} from "./components/features/PixelFrame/PixelFrameSlice";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@material-ui/core";

function App() {
  const dispatch = useDispatch()
  const { pixelFrame } = useSelector(selectPixelframe);
  useEffect(() => {
    dispatch(init({ width: 16, heigth: 16 }));
  }, []);
  return pixelFrame === "loading" ? (
    <CircularProgress></CircularProgress>
  ) : (
    <PixelFrame pixelArray={pixelFrame}></PixelFrame>
  );
}

export default App;
