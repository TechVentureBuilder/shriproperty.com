import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types/interfaces";
import { replaceUserReducer } from "../reducers/user.reducer";

export interface IUserState {
	currentUser: null | IUser;
	isLoggedIn: boolean;
}

const initialState: IUserState = {
	currentUser: null,
	isLoggedIn: false,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		replaceUser: replaceUserReducer,
	},
});

export const userActions = userSlice.actions;
export default userSlice;
