import { Dispatch } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { authActions } from "../slices/auth.slice";
import { userActions } from "../slices/user.slice";
import { IUser } from "../types/interfaces";
import API from "../utils/api.util";

export interface IPostSignupPayload {
	name: string;
	email: string;
	phone: number;
	password: string;
	cpassword: string;
}

export function postSignup(payload: IPostSignupPayload) {
	return async () => {
		return await API.post("/auth/signup", payload);
	};
}

export interface IGetVerifyAccountPathParams {
	/**
	 * email on which verification code is sent
	 */
	email: string;

	/**
	 * verification code sent to email
	 */
	verificationCode: string;
}

export function getVerifyAccount(pathParams: IGetVerifyAccountPathParams) {
	return async () => {
		return await API.get(`/auth/verify/${pathParams.email}/${pathParams.verificationCode}`);
	};
}

export interface IPostLoginPayload {
	email: string;
	password: string;
}

export function postLogin(payload: IPostLoginPayload) {
	return async () => {
		interface IResponse {
			message: string;
			access_token: string;
			refresh_token: string;
		}

		const res: IResponse = await API.post("/auth/login", payload);

		return res;
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
