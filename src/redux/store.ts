import { configureStore } from "@reduxjs/toolkit"
import languageReducer from './languageSlice'
import usersReducer from './usersSlice'


export const store = configureStore({
    reducer: {
        language: languageReducer,
        users: usersReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
