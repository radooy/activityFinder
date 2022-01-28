import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    loggedIn:false,
    username: "",
    id:"",
    city: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: initialStateValue
    },
    reducers: {
        logIn: (state, action) => {
            state.value.loggedIn =true;
            state.value.username = action.payload.username;
            state.value.id = action.payload.id;
            state.value.city = action.payload.city;
        },
    
        logOut: (state, action) => {
            document.cookie = `x-auth-token= ;expires=Thu, 01 Jan 1970 00:00:01 GMT;`
            state.value = initialStateValue;
        },
    }
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
