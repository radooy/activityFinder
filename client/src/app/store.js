import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userAuthSlice";
import dataReducer from "../features/dataSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        data: dataReducer
    }
});
