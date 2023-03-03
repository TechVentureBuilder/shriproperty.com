import { createSlice, Slice } from "@reduxjs/toolkit";
import { setContactPostLoadingStateReducer } from "../reducers/contacts.reducer";

export enum EContactStatus {
	Pending = "Pending",
	"In Progress" = "In Progress",
	Closed = "Closed",
}

export interface IContact {
	_id: string;
	uid: number;
	name: string;
	email: string;
	phone: number;
	subject: string;
	message: string;
	status: EContactStatus;
	createdAt?: Date;
	updatedAt?: Date;
}

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
