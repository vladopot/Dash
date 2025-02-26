import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResponseModel, userModel } from "../models/ResponseModel";

const initialState: ResponseModel = {
    users: []
}

export const UsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addData: (state, action: PayloadAction<userModel[]>) => {
            state.users = action.payload
        }
    }
});

export const {addData} = UsersSlice.actions;
export default UsersSlice.reducer