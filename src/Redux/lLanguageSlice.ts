import { createSlice } from "@reduxjs/toolkit";

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
            state.value = (state.value === 'ENG') ? 'RUS' : 'ENG';
        }
    }
});

export const {toogleLanguage} = LangSlice.actions;
export default LangSlice.reducer;