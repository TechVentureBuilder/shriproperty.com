import { Dispatch } from "@reduxjs/toolkit";
import { contactsReducers } from "../slices/contacts.slice";
import { IContact } from "../types/interfaces";
import api from "../utils/api.util";

export function postContactAction(payload: IContact) {
	return async (dispatch: Dispatch) => {
		try {
			dispatch(contactsReducers.setPostLoading(true));
			const res: { message: string } = await api.post("/contacts", payload);
			return res;
		} finally {
			dispatch(contactsReducers.setPostLoading(false));
		}
	};
}
