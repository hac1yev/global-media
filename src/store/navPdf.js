import { createSlice } from "@reduxjs/toolkit";

const initialFormLocation = {
    program: '',
    concept: ''
};

const navPdfSlice = createSlice({
    name: 'navPdfSlice',
    initialState: initialFormLocation,
    reducers: {
        getProgramPdf(state, action) {
            state.program = action.payload[1].Information
        },
        getConceptPdf(state, action) {
            state.concept = action.payload[0].Information
        },
    }
});

export default navPdfSlice;
export const navPdfSliceAction = navPdfSlice.actions;