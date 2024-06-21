import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: false,
    userData: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        dataIn: (state, action) => {
            state.status = true;
            state.data = action.payload; // Correct the property name
        },
        dataOut: (state) => {
            state.status = false;
            state.data = null;
        }
    }
});

export const { dataIn, dataOut } = authSlice.actions;
export default authSlice.reducer;
