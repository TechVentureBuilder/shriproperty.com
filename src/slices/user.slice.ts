import { createSlice } from "@reduxjs/toolkit";
import { replaceUserReducer } from "../reducers/user.reducer";

export interface IUser {
	_id: string;
	uid: string;
	name: string;
	email: string;
	phone: string;
	exp: number;
	iat: number;
	listings: [];
	properties: [];
	createdAt: string;
	updatedAt: string;
}

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
