import React from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PixelProps } from "./Pixel";
import { BottomNavigationAction, colors } from "@material-ui/core";

type Pixel = {
  color: string;
  brightness: number;
};

type SliceState = { pixelFrame: "loading" } | { pixelFrame: Pixel[][] };

const slice = createSlice({
  name: "pixelFrame",
  initialState: { pixelFrame: "loading" } as SliceState,
  reducers: {
    init: (state, action: PayloadAction<{ width: number; heigth: number }>) => {
      const { width, heigth } = { ...action.payload };
      //state.pixelFrame =
      var pf = [];
      for (let i = 0; i < width; i++) {
        var row = [];
        for (let j = 0; j < heigth; j++) {
          var pixel = { color: "#ff0000", brightness: 1 };
          row.push(pixel);
        }
        pf.push(row);
      }
      state.pixelFrame = pf;
    },
    pixelChange: (
      state,
      action: PayloadAction<{ x: number; y: number; color: string }>
    ) => {
      const { x, y, color } = { ...action.payload };
      (state.pixelFrame[x][y] as Pixel).color =color
    },
  },
});

export const { init, pixelChange } = slice.actions;

export const selectPixelframe = (state: any) => state.pixelFrame;
export default slice.reducer;
