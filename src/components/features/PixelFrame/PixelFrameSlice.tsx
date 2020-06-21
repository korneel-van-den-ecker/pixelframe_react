import React from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {PixelProps} from './Pixel'
import { BottomNavigationAction } from "@material-ui/core";

type SliceState = { pixelFrame:"loading"} | {pixelFrame:PixelProps[][]}


const slice = createSlice({
    name: 'test',
    initialState: {pixelFrame:"loading"} as SliceState,
    reducers: {
      init:(state,action:PayloadAction<{width:number,heigth:number}>)=>{
          const {width,heigth} = {...action.payload}
          //state.pixelFrame = 
          var pf = []
          for (let i = 0; i < width; i++) {
              var row = []
              for (let j = 0; j < heigth; j++) {
                var pixel = {color:"#ff0000",brightness:1}
                row.push(pixel);
              }
              pf.push(row)
          }
          state.pixelFrame = pf;
      }
    }
  })

export default slice.reducer;