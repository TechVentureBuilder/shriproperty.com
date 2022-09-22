import { PayloadAction } from "@reduxjs/toolkit";
import { IAuthState } from "../slices/auth.slice";

/**
 * This function will take email as action
 */
export function replaceEmail(state: IAuthState, action: PayloadAction<string>) {
	state.email = action.payload;
}

/**
 * This function will take boolean as action and will open the reset password modal if `true`
 */
export function setIsResetPasswordModalVisible(state: IAuthState, action: PayloadAction<boolean>) {
	state.isResetPasswordModalVisible = action.payload;
}
