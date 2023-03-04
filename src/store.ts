import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth.slice";
import contactsSlice from "./slices/contacts.slice";
import userSlice from "./slices/user.slice";

const store = configureStore({
	reducer: {
		contacts: contactsSlice.reducer,
		user: userSlice.reducer,
		auth: authSlice.reducer,
	},
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export default store;
