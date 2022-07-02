import {createSlice} from '@reduxjs/toolkit';

export const searchCountry = createSlice({
    name:'Search',
    initialState:{
        value:[]
    },
    reducers:{
        country:(state, action) => action.payload
    }
});

export const {country} = searchCountry.actions;
export default searchCountry.reducer;