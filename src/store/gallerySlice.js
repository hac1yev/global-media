import { createSlice } from "@reduxjs/toolkit";

const initialGallery = {
    allGallery: {},
    allCite: {}
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
    }
});

export default gallerySlice;
export const gallerySliceSction = gallerySlice.actions;