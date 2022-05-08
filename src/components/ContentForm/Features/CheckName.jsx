import {createSlice} from '@reduxjs/toolkit';

export const checkName = createSlice({
    name: 'check',
    initialState:{
        value: 0
    },
    reducers:{
        check:(state, action) => action.payload
    }
})

export const {check} = checkName.actions;
export default checkName.reducer;