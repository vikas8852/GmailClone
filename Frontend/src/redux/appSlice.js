import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        open:false
    },
    reducers:{
        setOpnen:(state,action)=>{
            state.open=action.payload
        }
    }
})
export const {setOpnen}=appSlice.actions;
export default appSlice.reducer;