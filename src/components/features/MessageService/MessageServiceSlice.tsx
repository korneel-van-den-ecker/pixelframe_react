import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SliceState = { selectedTextColor: string;selectedBackgroundColor:string, selectedBrightness: number,message:string };

const slice = createSlice({
  name: "messageService",
  initialState: {
    selectedTextColor: "#0000ff",
    selectedBackgroundColor: "#000000",
    selectedBrightness: 1,
    message: ""
  } as SliceState,
  reducers: {
    setSelectedTextColor: (state, action: PayloadAction<{ color: string }>) => {
      const { color } = { ...action.payload };
      state.selectedTextColor = color;
    },
    setSelectedBackgroundColor: (state, action: PayloadAction<{ color: string }>) => {
      const { color } = { ...action.payload };
      state.selectedTextColor = color;
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

export const { setSelectedTextColor,setSelectedBackgroundColor} = slice.actions;

export const selectLiveEditor = (state: any) => state.liveEditor;
export default slice.reducer;
