import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";

type SliceState = {
  TextColor: string;
  TextBrightness: number;
  BackgroundColor: string;
  BackgroundBrightness: number;
  message: string;
};

const slice = createSlice({
  name: "messageService",
  initialState: {
    TextColor: "#0000ff",
    TextBrightness: 1,
    BackgroundColor: "#000000",
    BackgroundBrightness: 1,
    message: "",
  } as SliceState,
  reducers: {
    setTextColor: (state, action: PayloadAction<{ color: string }>) => {
      const { color } = { ...action.payload };
      state.TextColor = color;
    },
    setTextBrightness: (
      state,
      action: PayloadAction<{ brightness: number }>
    ) => {
      const { brightness } = { ...action.payload };
      state.TextBrightness = brightness;
    },
    setBackgroundColor: (state, action: PayloadAction<{ color: string }>) => {
      const { color } = { ...action.payload };
      state.TextColor = color;
    },
    setBackgroundBrightness: (
      state,
      action: PayloadAction<{ brightness: number }>
    ) => {
      const { brightness } = { ...action.payload };
      state.BackgroundBrightness = brightness;
    },
  },
});

export const {
  setTextColor,
  setBackgroundColor,
  setBackgroundBrightness,
  setTextBrightness,
} = slice.actions;

export const sendTextMessage=(socket:SocketIO.Socket)=>{
  return (dispatch:Dispatch,getState:any)=>{
    socket
  }
}

export const selectLiveEditor = (state: any) => state.liveEditor;
export default slice.reducer;
