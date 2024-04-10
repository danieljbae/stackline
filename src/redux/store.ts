import { configureStore } from "@reduxjs/toolkit";
import rootReducer, { RootState } from "./reducers";

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type AppDispatch = typeof store.dispatch;
export default store;
