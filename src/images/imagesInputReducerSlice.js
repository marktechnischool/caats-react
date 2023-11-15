import { createSlice } from "@reduxjs/toolkit";


const imagesInputReducerSlice = createSlice({
    name: 'imagesInput',
    initialState: { limit: 100, page: 1 },
    reducers: {
        updatePage: (state, action) => {
            state.page = action.payload
        },
        updateLimit: (state, action) => {
            state.limit = action.payload
        },
    }
})

export const { updatePage, updateLimit } = imagesInputReducerSlice.actions

export default imagesInputReducerSlice.reducer