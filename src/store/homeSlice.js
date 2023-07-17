import { createSlice } from "@reduxjs/toolkit";

const initialHomeState = {
    about: {},
    aboutImg: {},
    banners: {},
    videos: [],
    map: {},
    highlights: [],
    agendas: [],
    agenda_info: {},
    statics: []
};

const homeSlice = createSlice({
    name: 'homeSlice',
    initialState: initialHomeState,
    reducers: {
        getAbout(state, action) {
            state.about = {...action.payload}
        },
        getAboutImg(state, action) {
            state.aboutImg = {...action.payload}
        },
        getBanners(state, action) {
            state.banners = {...action.payload}
        },
        getVideos(state, action) {
            state.videos = [...action.payload]
        },
        getMap(state, action) {
            state.map = {...action.payload}
        },
        getHighlight(state, action) {
            state.highlights = [...action.payload]
        },
        // getAgendas(state, action) {
        //     state.highlight = [...action.payload]
        // },
        getAgendaInfo(state, action) {
            state.agenda_info = {...action.payload}
        },
        getAgendas(state, action) {
            state.agendas = [...action.payload]
        },
        getStatics(state, action) {
            state.statics = [...action.payload]
        },
    }
});

export default homeSlice;
export const homeSliceAction = homeSlice.actions;