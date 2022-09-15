import { PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "../slices/user.slice";
import { IUser } from "../types/interfaces";

export function replaceUserReducer(
	state: IUserState,
	action: PayloadAction<{ user: IUser | null; isLoggedIn: boolean }>,
) {
	state.currentUser = action.payload.user;
	state.isLoggedIn = action.payload.isLoggedIn;
}
