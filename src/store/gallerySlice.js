import { createSlice } from "@reduxjs/toolkit";

const initialGallery = {
    allGallery: {},
    allCite: {},
    galleryInner: [],
    galleryInnerText: ''
};

const gallerySlice = createSlice({
    name: 'gallerySlice',
    initialState: initialGallery,
    reducers: {
        getAllGallery(state, action) {
            state.allGallery = { ...action.payload }
        },
        getAllCite(state, action) {
            state.allCite = { ...action.payload }
        },
        getGalleryInner(state,action) {
            state.galleryInner = [...action.payload]
        },
        getGalleryInnerText(state,action) {
            state.galleryInnerText = action.payload
        },
    }
});

export default gallerySlice;
export const gallerySliceAction = gallerySlice.actions;