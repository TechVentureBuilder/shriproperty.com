import { message } from "antd";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const api: AxiosInstance = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	timeout: 10000,
});

api.interceptors.response.use(
	(res: AxiosResponse) => {
		return Promise.resolve(res.data);
	},
	async (err: AxiosError<{ error: string }>) => {
		const accessToken = localStorage.getItem("access_token");
		const refreshToken = localStorage.getItem("refresh_token");

		if (!err.response) return message.error("Network Error");

		if (err.response.status === 403 && accessToken && refreshToken) {
			const res: { access_token: string } = await api.get("/auth/refresh", {
				headers: {
					"x-refresh": refreshToken,
				},
			});

			if (res.access_token) localStorage.setItem("access_token", res.access_token);

			return Promise.reject(err.response.data);
		}

		if (err.response.data) {
			message.error({
				content: err.response.data.error,
				duration: 2,
				key: "error",
			});
			return Promise.reject(err.response.data);
		}
	},
);

export default api;
