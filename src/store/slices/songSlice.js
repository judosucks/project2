import { createSlice } from "@reduxjs/toolkit"
import { reset } from "../actions"
const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        addSong(state, action) {
            state.push(action.payload)
        },
        removeSong(state, action) {
            const index = state.indexOf(action.payload)
            console.log('index', index)
            state.splice(index, 1)
            // state.shift()

        }
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            return []
        })
    }
    // extraReducers(builder){     builder.addCase('movie/reset',(state,action)=>{
    //       console.log(builder,'builder',state,'state','action',action)
    // return []     }) }
})
export const {addSong,removeSong} = songsSlice.actions
export const songReducer  = songsSlice.reducer