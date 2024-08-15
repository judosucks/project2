import { createSlice } from "@reduxjs/toolkit"
import { reset } from "../actions"
const moviesSlice = createSlice({
    name: 'movie', //action type
    initialState: [],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload)
        },
        removeMovie(state, action) {
            const index = state.indexOf(action.payload)
            console.log(index)
            state.splice(index, 1)
            // state.shift()

        }
    },
    extraReducers(builder) { //combined reducer<---
        builder.addCase(reset, (state, action) => {
            return []
        })
    }
})
export const {addMovie,removeMovie} = moviesSlice.actions
export const movieReducer =  moviesSlice.reducer