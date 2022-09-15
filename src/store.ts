import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./slices/contacts.slice";
import userSlice from "./slices/user.slice";

const store = configureStore({
	reducer: {
		contacts: contactsSlice.reducer,
		user: userSlice.reducer,
	},
});

export default store;
