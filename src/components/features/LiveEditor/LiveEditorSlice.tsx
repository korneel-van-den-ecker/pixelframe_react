import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type SliceState =  {selectedColor : string };

const slice = createSlice({
  name: "liveEditor",
  initialState: {selectedColor:"#000000"} as SliceState,
  reducers: {    
    setSelectedColor: (
      state,
      action: PayloadAction<{ color: string }>
    ) => {
      const {color } = { ...action.payload };
      state.selectedColor = color
    },
  },
});

export const {setSelectedColor } = slice.actions;

export const selectLiveEditor = (state: any) => state.liveEditor;
export default slice.reducer;
