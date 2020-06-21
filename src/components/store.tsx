import {configureStore} from '@reduxjs/toolkit'
import pixelFrameReducer from './features/PixelFrame/PixelFrameSlice';

export default configureStore({
    reducer:{
        pixelFrame:pixelFrameReducer
    }
})