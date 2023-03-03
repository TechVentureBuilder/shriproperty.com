import { Dispatch } from "@reduxjs/toolkit";
import { IContact, contactsReducers } from "../slices/contacts.slice";
import API, { IAPIResponseError, IAPIResponseSuccess } from "../utils/api.util";
import { AxiosError } from "axios";
import { message } from "antd";

export function postContactActionHandler(payload: IContact) {
	return async (dispatch: Dispatch) => {
		try {
			dispatch(contactsReducers.setPostLoading(true));
			const res = await API.post<IAPIResponseSuccess>("/contacts", payload);

			message.success("Contact request submitted successfully");
			return Promise.resolve(res.data);
		} catch (err) {
			return Promise.reject(err as AxiosError<IAPIResponseError>);
		} finally {
			dispatch(contactsReducers.setPostLoading(false));
		}
	};
}
