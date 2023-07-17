import { createSlice } from "@reduxjs/toolkit";

const initialNewsState = {
    news: [],
    newsDetail: {},
};

const newsSlice = createSlice({
    name: 'newsSlice',
    initialState: initialNewsState,
    reducers: {
        getAllNews(state,action) {
            state.news = [...action.payload]
        },
        getNewsDetail(state,action){
            state.newsDetail = {...action.payload}
        }
    }
});

export default newsSlice;
export const newsSliceAction = newsSlice.actions;