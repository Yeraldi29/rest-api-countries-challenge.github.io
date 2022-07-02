import {createSlice} from '@reduxjs/toolkit';

export const itemsFilter = createSlice({
    name: 'items',
    initialState:{
        value:6
    },
    reducers:{
        itemsIndex: (state) => {
            state.value = state.value - state.value + 6;
        },
        addItems:state =>{
            state.value += 5;
        }
    }
});

export const {itemsIndex,addItems} = itemsFilter.actions;
export default itemsFilter.reducer;