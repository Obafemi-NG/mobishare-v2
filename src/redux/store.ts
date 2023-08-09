import { configureStore } from "@reduxjs/toolkit";

import transactionReducer from "./slices/transactionSlice";
import uiReducer from "./slices/uiSlice";

const store = configureStore({
  reducer: {
    transactionReducer,
    uiReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
