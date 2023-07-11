import { createSlice } from "@reduxjs/toolkit";

const initialNewsState = {
    news: []
};

const newsSlice = createSlice({
    name: 'newsSlice',
    initialState: initialNewsState,
    reducers: {
        getAllNews(state,action) {
            state.news = [...action.payload]
        }
    }
});

export default newsSlice;
export const newsSliceAction = newsSlice.actions;