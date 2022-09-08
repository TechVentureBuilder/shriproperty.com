import { Dispatch } from "@reduxjs/toolkit";
import { contactsReducers } from "../slices/contacts.slice";
import { IContact } from "../types/interfaces";
import api from "../utils/api.util";

export function postContactAction(payload: IContact) {
	return async (dispatch: Dispatch) => {
		dispatch(contactsReducers.setPostLoading(true));
		await api.post("/contacts", payload);
		dispatch(contactsReducers.setPostLoading(false));
	};
}
