import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  registeredUser: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.registeredUser.push(action.payload);
    },
  },
});

export default usersSlice.reducer;
export const { addUser } = usersSlice.actions;
export const userState = (state) => state.users.registeredUser;
