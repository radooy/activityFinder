import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialStateValue = {
    isLoading: false,
    loggedIn:false,
    username: "",
    id:"",
    city: ""
}

export const auth = createAsyncThunk(
    'users/auth',
    async (_, thunkAPI) => {
      const response = await fetch("http://localhost:5000/api/auth/verify",{
        credentials:"include",
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
        },
    });
      const data = await response.json();
      return data;
    }
  )

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

    },
    extraReducers: (builder) => {
        builder.addCase(auth.fulfilled, (state, action) => {
            state.value.isLoading = false;
            state.value.loggedIn =action.payload.isVerified;
            state.value.username = action.payload.username;
            state.value.id = action.payload.id;
            state.value.city = action.payload.city;
        });
        builder.addCase(auth.pending, (state, action) => {
            state.value.isLoading = true;
        });

    }
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
