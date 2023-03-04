import { createSlice } from "@reduxjs/toolkit";
import {
	replaceEmailReducer,
	setAuthSignupLoadingReducer,
	setAuthVerifyLoadingReducer,
	setIsResetPasswordModalVisibleReducer,
} from "../reducers/auth.reducer";

export interface IAuthState {
	email: string;
	isResetPasswordModalVisible: boolean;
	signupLoading: boolean;
	verifyLoading: boolean;
}

const initialState: IAuthState = {
	email: "",
	isResetPasswordModalVisible: false,
	signupLoading: false,
	verifyLoading: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		replaceEmail: replaceEmailReducer,
		setIsResetPasswordModalVisible: setIsResetPasswordModalVisibleReducer,
		setAuthSignupLoading: setAuthSignupLoadingReducer,
		setAuthVerifyLoading: setAuthVerifyLoadingReducer,
	},
});

export const authActions = authSlice.actions;
export default authSlice;
