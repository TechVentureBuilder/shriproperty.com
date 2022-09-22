import { createSlice } from "@reduxjs/toolkit";
import { replaceEmail, setIsResetPasswordModalVisible } from "../reducers/auth.reducer";

export interface IAuthState {
	email: string;
	isResetPasswordModalVisible: boolean;
}

const initialState: IAuthState = {
	email: "",
	isResetPasswordModalVisible: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		replaceEmail,
		setIsResetPasswordModalVisible,
	},
});

export const authActions = authSlice.actions;
export default authSlice;
