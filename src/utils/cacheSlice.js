import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
    name: "cache",
    initialState: {
        cache: {}
    },
    reducers: {
        setCache: (state, action) => {
            state.cache = { ...state.cache, ...action.payload };
        }
    }
});

export const { setCache } = cacheSlice.actions;
export default cacheSlice.reducer;
