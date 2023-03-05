import { Dispatch } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { authActions } from "../slices/auth.slice";
import { IUser, userActions } from "../slices/user.slice";
import API, { IAPIResponseError, IAPIResponseSuccess } from "../utils/api.util";
import { message } from "antd";

export interface IPostSignupPayload {
	name: string;
	email: string;
	phone: number;
	password: string;
	cpassword: string;
}

export function postSignupHandler(payload: IPostSignupPayload) {
	return async (dispatch: Dispatch) => {
		try {
			dispatch(authActions.setAuthSignupLoading(true));
			const res = await API.post<IAPIResponseSuccess>("/auth/signup", payload);

			message.success("Account created successfully. Please verify your email");

			return Promise.resolve(res);
		} catch (err) {
			return Promise.reject(err as AxiosError<IAPIResponseError>);
		} finally {
			dispatch(authActions.setAuthSignupLoading(false));
		}
	};
}

export interface IGetVerifyAccountPayload {
	verificationCode: string;
	token: string;
}

export function getVerifyAccountHandler(payload: IGetVerifyAccountPayload) {
	return async (dispatch: Dispatch) => {
		try {
			dispatch(authActions.setAuthVerifyLoading(true));
			const res = await API.get<IAPIResponseSuccess>(
				`/auth/verify/${payload.verificationCode}`,
				{
					headers: {
						Authorization: `Bearer ${payload.token}`,
					},
				},
			);

			message.success("Account verified successfully");

			return Promise.resolve(res);
		} catch (err) {
			return Promise.reject(err as AxiosError<IAPIResponseError>);
		} finally {
			dispatch(authActions.setAuthVerifyLoading(false));
		}
	};
}

export interface IPostLoginPayload {
	email: string;
	password: string;
}

export function postLoginHandler(payload: IPostLoginPayload) {
	return async (dispatch: Dispatch) => {
		try {
			dispatch(authActions.setAuthLoginLoading(true));

			interface IResponse extends IAPIResponseSuccess {
				access_token: string;
				refresh_token: string;
			}

			const res = await API.post<IResponse>("/auth/login", payload);

			console.log("====================================");
			console.log(res);
			console.log("====================================");

			localStorage.setItem("access_token", res.data.access_token);
			localStorage.setItem("refresh_token", res.data.refresh_token);

			message.success("Logged in successfully");

			return Promise.resolve(res);
		} catch (err) {
			return Promise.reject(err as AxiosError<IAPIResponseError>);
		} finally {
			dispatch(authActions.setAuthLoginLoading(false));
		}
	};
}

export function getCurrentUser() {
	return async (dispatch: Dispatch) => {
		try {
			const accessToken = localStorage.getItem("access_token");

			interface IResponse {
				message: string;
				user: IUser;
			}

			const res: IResponse = await API.get("/auth/me", {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});

			if (res.user) {
				dispatch(userActions.replaceUser({ user: res.user, isLoggedIn: true }));
			} else {
				dispatch(userActions.replaceUser({ user: null, isLoggedIn: false }));
			}

			return Promise.resolve(res);
		} catch (err) {
			return Promise.reject(err);
		}
	};
}

/**
 * this action will send a verification code to the given email
 * @param email email on which password reset link is sent
 */
export function postForgotPassword(email: string) {
	return async (dispatch: Dispatch) => {
		try {
			const res = await API.post("/auth/forgotpassword", { email });

			dispatch(authActions.replaceEmail(email));
			dispatch(authActions.setIsResetPasswordModalVisible(true));

			return Promise.resolve(res);
		} catch (err) {
			return Promise.reject(err);
		}
	};
}

interface IPatchResetPasswordPayload {
	pathParams: {
		/**
		 * email on which password reset code is sent
		 */
		email: string;

		/**
		 * password reset code which was sent to email
		 */
		passwordResetCode: string;
	};
	body: {
		/**
		 * new password
		 */
		password: string;

		/**
		 * confirm new password
		 */
		cpassword: string;
	};
}

/**
 * this action will reset the password of the user
 * @param {object} pathParams email and password reset code
 * @param {object} body new password and confirm password
 */
export function patchResetPassword(
	pathParams: IPatchResetPasswordPayload["pathParams"],
	body: IPatchResetPasswordPayload["body"],
) {
	return async () => {
		try {
			const res = await API.patch(
				`/auth/resetpassword/${pathParams.email}/${pathParams.passwordResetCode}`,
				body,
			);

			return Promise.resolve(res);
		} catch (err) {
			return Promise.reject<AxiosError<{ error: string }>>(err);
		}
	};
}
