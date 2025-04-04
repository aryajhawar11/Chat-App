import { createSlice } from "@reduxjs/toolkit";
import { Socket } from "socket.io-client";
const socketSlice= createSlice({
    name:"socket",
    initialState:{
        socket:null
    },
    reducers:{
        setScoket:(state,actions)=>{
            state.socket= actions.payload;
        }
    }
});
export const {setScoket}= socketSlice.actions;
export default socketSlice.reducer;