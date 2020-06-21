import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SliceState = { selectedColor: string; selectedBrightness: number };

const slice = createSlice({
  name: "liveEditor",
  initialState: {
    selectedColor: "#000000",
    selectedBrightness: 1,
  } as SliceState,
  reducers: {
    setSelectedColor: (state, action: PayloadAction<{ color: string }>) => {
      const { color } = { ...action.payload };
      state.selectedColor = color;
    },
    setSelectedBrightness: (
      state,
      action: PayloadAction<{ brightness: number }>
    ) => {
      const { brightness } = { ...action.payload };
      state.selectedBrightness = brightness;
    },
  },
});

export const { setSelectedColor,setSelectedBrightness } = slice.actions;

export const selectLiveEditor = (state: any) => state.liveEditor;
export default slice.reducer;
