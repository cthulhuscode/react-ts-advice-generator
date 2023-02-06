import { configureStore } from "@reduxjs/toolkit";
import { adviceApi } from "./apis/adviceApi";

export const store = configureStore({
  reducer: {
    [adviceApi.reducerPath]: adviceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adviceApi.middleware),
});
