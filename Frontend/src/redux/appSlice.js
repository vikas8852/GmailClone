import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        open:false,
        user:null,
        emails:[],
        selectedEmail:null,
        searchText:"",
    },
    reducers:{
        setOpnen:(state,action)=>{
            state.open=action.payload
        },
        setAuthUser:(state,action)=>{
            state.user=action.payload
        },
        setEmail:(state,action)=>{
            state.emails=action.payload
        },
        setSelctedEmail:(state,action)=>{
            state.selectedEmail=action.payload
        },
        setSearchText:(state,action)=>{
            state.searchText=action.payload
        }
       
    }
})
export const {setOpnen,setAuthUser,setEmail,setSelctedEmail,setSearchText}=appSlice.actions;
export default appSlice.reducer;