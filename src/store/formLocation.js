import { createSlice } from "@reduxjs/toolkit";

const initialFormLocation = {
    overAllLocation: {}
};

const formLocationSlice = createSlice({
    name: 'formLocationSlice',
    initialState: initialFormLocation,
    reducers: {
        getOverAll(state, action) {
            state.overAllLocation = { ...action.payload }
        }
    }
});

export default formLocationSlice;
export const formLocationSliceAction = formLocationSlice.actions;