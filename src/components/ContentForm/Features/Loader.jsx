import {createSlice} from '@reduxjs/toolkit';

export const Loader = createSlice({
    name: 'Loader',
    initialState: {
        value: false
    },
    reducers:{
        setLoader : (state,action) => {
            state.value = action.payload
        }
    }
})

export const {setLoader} = Loader.actions;
export default Loader.reducer;