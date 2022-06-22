import {createSlice} from '@reduxjs/toolkit';

export const filterRegions = createSlice({
    name: 'filter',
    initialState:{
        value:[]
    },
    reducers:{
         Region : (state,action) => action.payload 
    }
})

export const {Region} = filterRegions.actions;
export default filterRegions.reducer;