import { PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUserState } from "../slices/user.slice";

export function replaceUserReducer(
	state: IUserState,
	action: PayloadAction<{ user: IUser | null; isLoggedIn: boolean }>,
) {
	state.currentUser = action.payload.user;
	state.isLoggedIn = action.payload.isLoggedIn;
}
