import { createSlice } from "@reduxjs/toolkit";

const initialNewsState = {
    session1: {},
    session2: {},
    session3: {}
};

const sessionSlice = createSlice({
    name: 'sessionSlice',
    initialState: initialNewsState,
    reducers: {
        getAllSessions(state,action) {
            state.session1 = {...action.payload[0]}
            state.session2 = {...action.payload[1]}
            state.session3 = {...action.payload[2]}
        }
    }
});

export default sessionSlice;
export const sessionSliceAction = sessionSlice.actions;