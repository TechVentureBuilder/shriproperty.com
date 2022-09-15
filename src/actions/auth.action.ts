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
			accessToken: string;
			refreshToken: string;
		}

		const res: IResponse = await api.post("/auth/login", payload);

		return res;
	};
}
