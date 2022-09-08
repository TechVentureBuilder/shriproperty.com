import { createSlice, Slice } from "@reduxjs/toolkit";
import { IContact } from "../types/interfaces";
import { setContactPostLoadingStateReducer } from "../reducers/contacts.reducer";

export interface IContactState {
	records: IContact[];
	postLoading: boolean;
}

const initialState: IContactState = {
	records: [],
	postLoading: false,
};

const contactsSlice: Slice = createSlice({
	name: "contacts",
	initialState,
	reducers: {
		setPostLoading: setContactPostLoadingStateReducer,
	},
});

export const contactsReducers = contactsSlice.actions;
export default contactsSlice;
