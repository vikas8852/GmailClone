import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        open:false,
        user:null
    },
    reducers:{
        setOpnen:(state,action)=>{
            state.open=action.payload
        },
        setAuthUser:(state,action)=>{
            state.open=action.payload
        }
       
    }
})
export const {setOpnen,setAuthUser}=appSlice.actions;
export default appSlice.reducer;