import {configureStore} from '@reduxjs/toolkit'
import pixelFrameReducer from './features/PixelFrame/PixelFrameSlice';
import liveEditorReducer from './features/LiveEditor/LiveEditorSlice'
export default configureStore({
    reducer:{
        pixelFrame:pixelFrameReducer,
        liveEditor:liveEditorReducer
    }
})