import { PayloadAction } from "@reduxjs/toolkit";
import { IAuthState } from "../slices/auth.slice";

/**
 * This function will take email as action
 */
export function replaceEmailReducer(state: IAuthState, action: PayloadAction<string>) {
	state.email = action.payload;
}

/**
 * This function will take boolean as action and will open the reset password modal if `true`
 */
export function setIsResetPasswordModalVisibleReducer(
	state: IAuthState,
	action: PayloadAction<boolean>,
) {
	state.isResetPasswordModalVisible = action.payload;
}

export const setAuthSignupLoadingReducer = (state: IAuthState, action: PayloadAction<boolean>) => {
	state.signupLoading = action.payload;
};

export const setAuthLoginLoadingReducer = (state: IAuthState, action: PayloadAction<boolean>) => {
	state.loginLoading = action.payload;
};

export const setAuthVerifyLoadingReducer = (state: IAuthState, action: PayloadAction<boolean>) => {
	state.verifyLoading = action.payload;
};
