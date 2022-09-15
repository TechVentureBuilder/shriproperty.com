import { Dispatch } from "@reduxjs/toolkit";
import { userActions } from "../slices/user.slice";
import { IUser } from "../types/interfaces";
import api from "../utils/api.util";

export interface IPostSignupPayload {
	name: string;
	email: string;
	phone: number;
	password: string;
	cpassword: string;
}

export function postSignup(payload: IPostSignupPayload) {
	return async () => {
		return await api.post("/auth/signup", payload);
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
		return await api.get(`/auth/verify/${pathParams.email}/${pathParams.verificationCode}`);
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

		const res: IResponse = await api.post("/auth/login", payload);

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

			const res: IResponse = await api.get("/auth/me", {
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
