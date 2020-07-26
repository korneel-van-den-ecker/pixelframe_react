import { createSlice, PayloadAction, Dispatch, createAsyncThunk, ThunkAction } from "@reduxjs/toolkit";

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
          var pixel = { color: "#000000", brightness: 0 };
          row.push(pixel);
        } 
        pf.push(row); 
      }
      state.pixelFrame = pf;
    },
    pixelChange: (
      state,
      action: PayloadAction<{ x: number; y: number; color: string,brightness:number }>
    ) => {
      const { x, y, color,brightness } = { ...action.payload };
      (state.pixelFrame[x][y] as Pixel).color =color;
      (state.pixelFrame[x][y] as Pixel).brightness = brightness;
    },
  },
});

export const { init, pixelChange } = slice.actions;

export const pixelChangeColor = ({x,y}:{ x: number; y: number},ws:any) =>{
  return  (dispatch:Dispatch,getState:any)=>{
    const {selectedColor,selectedBrightness} = getState().liveEditor
    console.log(selectedColor)
    dispatch(pixelChange({x:x,y:y,color:selectedColor,brightness:selectedBrightness})) 
    ws.updateFrame(getState().pixelFrame)
  }
}

export const selectPixelframe = (state: any) => state.pixelFrame;
export default slice.reducer;
