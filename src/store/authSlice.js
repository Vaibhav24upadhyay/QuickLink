import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,// not logged in
    userData : null,
}

// Creating slice 
const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        // method to for intialState manipulation
        // state : currect state , action : what we want to do with current state
        login : (state,action) => {
            state.status = true;
            state.userData = action.payload.userData 
        },
        logout : (state, action) => {
            state.status = false;
            state.userData = null;
        }
    }
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;