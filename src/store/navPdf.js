import { createSlice } from "@reduxjs/toolkit";

const initialFormLocation = {
    navPdf: {}
};

const navPdfSlice = createSlice({
    name: 'navPdfSlice',
    initialState: initialFormLocation,
    reducers: {
        getNavPdf(state, action) {
            state.navPdf = { ...action.payload }
        }
    }
});

export default navPdfSlice;
export const navPdfSliceAction = navPdfSlice.actions;