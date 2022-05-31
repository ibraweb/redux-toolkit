import { createSlice } from "@reduxjs/toolkit"

export interface CounterState {
    title: string,
    data: number
}


const initialState: CounterState = {
    data: 42,
    title: "Limbon using redux-toolkit basic 2022"
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,

    reducers: {
        increment: (state, action) => {
            state.data += action.payload
        },
        
         decrement: (state, action) => {
            state.data -= action.payload
         }
    }
})


export const {increment, decrement} = counterSlice.actions;