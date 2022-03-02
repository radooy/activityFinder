import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    cities: [],
    sports: []
}

export const getCities = createAsyncThunk(
    'data/cities',
    async (_, thunkAPI) => {
        const response = await fetch("http://localhost:5000/api/utils/cities");
        const data = response.json();
        return data;
    }
);

export const getSports = createAsyncThunk(
    'data/sports',
    async (_, thunkAPI) => {
        const response = await fetch("http://localhost:5000/api/utils/sports");
        const data = response.json();
        return data;
    }
);

export const dataSlice = createSlice({
    name: "data",
    initialState: {
        value: initialState
    },
    extraReducers: (builder) => {
        builder.addCase(getCities.fulfilled, (state, action) => {
            state.value.cities = action.payload.cities;
        });
        builder.addCase(getSports.fulfilled, (state, action) => {
            state.value.sports = action.payload.sports;
        });
    }
});

export default dataSlice.reducer;
