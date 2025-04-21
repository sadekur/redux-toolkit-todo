import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        incrementAmount: (state, action) => {
            state.count += action.payload;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
    },
});

export const { increment, incrementAmount, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;