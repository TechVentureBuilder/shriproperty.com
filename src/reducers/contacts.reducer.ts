import { PayloadAction } from "@reduxjs/toolkit";
import { IContactState } from "../slices/contacts.slice";

export function setContactPostLoadingStateReducer(
	state: IContactState,
	action: PayloadAction<boolean>,
) {
	state.postLoading = action.payload;
}
