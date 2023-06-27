import { configureStore } from "@reduxjs/toolkit";
import movieReducer from '../redux/Slices/movieSlice.js'

export const store=configureStore({
    reducer:{
        movies : movieReducer,
    },
})