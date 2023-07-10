import { createSlice } from "@reduxjs/toolkit";

const initialHomeState = {
    about: [],
    banners: [],
    videos: [],
    highlight: [],
    speakers: [],
    statics: []
};

const homeSlice = createSlice({
    name: 'homeSlice',
    initialState: initialHomeState,
    reducers: {
        getAbout(state, action) {
            state.about = [...action.payload]
        },
        getBanners(state, action) {
            state.banners = [...action.payload]
        },
        getVideos(state, action) {
            state.videos = [...action.payload]
        },
        getHighlight(state, action) {
            state.highlight = [...action.payload]
        },
        getSpeakers(state, action) {
            state.speakers = [...action.payload]
        },
        getStatics(state, action) {
            state.statics = [...action.payload]
        },
    }
});

export default homeSlice;
export const homeSliceAction = homeSlice.actions;