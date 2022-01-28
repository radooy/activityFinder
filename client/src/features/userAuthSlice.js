import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn:false,
    username: "",
    id:"",
    city: ""
}

export const userSlice = createSlice({
    name: "userAuth",
    initialState,
    reducers: {
        logIn: (state, action) => {
            state = {
                loggedIn: true,
                username: action.payload.username,
                id: action.payload.id,
                city: action.payload.city
            };
        },
    
        logOut: (state, action) => {
            document.cookie = `x-auth-token= ;expires=Thu, 01 Jan 1970 00:00:01 GMT;`
            state = initialState;
        },
    }
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
