import { createSlice } from "@reduxjs/toolkit";

const initialFormState = {
    overall: {},
    formPurp: {},
    formImg: {}
};

const formAboutSlice = createSlice({
    name: 'formAboutSlice',
    initialState: initialFormState,
    reducers: {
        getOverAll(state, action) {
            state.overall = { ...action.payload }
        },
        getFormPurp(state, action) {
            state.formPurp = { ...action.payload }
        },
        getFormImg(state, action) {
            state.formImg = {...action.payload}
        }
    }
});

export default formAboutSlice;
export const formAboutSliceAction = formAboutSlice.actions;