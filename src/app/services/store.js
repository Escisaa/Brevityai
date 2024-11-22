import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article"; // Adjust the import as necessary

export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});
