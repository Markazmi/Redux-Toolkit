import { createSlice } from "@reduxjs/toolkit";


const initialState={
    numOfIcecreams:15,
};

const IceCreamSlice = createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered:(state)=> {
          state.numOfIcecreams--;
        },
    
        restocked:(state)=>{
            state.numOfIcecreams++;
    }
},
})

export default IceCreamSlice.reducer;
export const {ordered, restocked}= IceCreamSlice.actions;