import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userAuthSlice";

export const store = configureStore({
    reducer: {
        user: userReducer
    }
});
