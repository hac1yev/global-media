import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import { langSlice } from "./langSlice";
import formAboutSlice from "./forumAbout";
import formLocationSlice from "./formLocation";
import gallerySlice from "./gallerySlice";
import newsSlice from "./newsSlice";


export const store = configureStore({
    reducer: {
        homeReducer: homeSlice.reducer,
        langReducer: langSlice.reducer,
        formpurpReducer: formAboutSlice.reducer,
        formLocationReducer: formLocationSlice.reducer,
        galleryReducer: gallerySlice.reducer,
        newsReducer: newsSlice.reducer
    }
});