import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import { langSlice } from "./langSlice";

export const store = configureStore({
    reducer: {
        homeReducer: homeSlice.reducer,
        langReducer: langSlice.reducer,
    }
});