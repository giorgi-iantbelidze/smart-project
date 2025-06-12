import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    username: 'alex',
    surname: "beria",
    age:25,
    admin: false,
    cash: 240,
    email: "",
};

const userSlice = createSlice({
    name: ' user',
    initialState: initialState,
    reducers: {
        changeEmail: (state, action) =>{
            state.email= action.payload.email;
        }

    }
});
export const {changeEmail} = userSlice.actions;
export default userSlice.reducer;