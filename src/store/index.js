import {configureStore, createSlice, createAction} from '@reduxjs/toolkit'

export const reset = createAction('app/reset')
console.log(reset.toString())

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
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            return []
        })
    }
})
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

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
        movies: moviesSlice.reducer
    }
})

// store.dispatch(    songsSlice.actions.addSong("new song") ) const finalstate
// = store.getState()

export {store}
export const {
    addSong,
    removeSong
} = songsSlice.actions
export const {
    addMovie,
    removeMovie
} = moviesSlice.actions