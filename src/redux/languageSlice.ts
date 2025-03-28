import { createSlice } from "@reduxjs/toolkit";
import { Languages } from "../common/enums/Languages";

export interface LangState {
    value: string
}

const initialState: LangState = {
    value: 'ENG'
}

export const LangSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        toogleLanguage: (state) => {
            state.value = (state.value === Languages.ENGLISH) ? Languages.RUSSIAN : Languages.ENGLISH;
        }
    }
});

export const {toogleLanguage} = LangSlice.actions;
export default LangSlice.reducer;