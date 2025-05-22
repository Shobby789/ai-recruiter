import { configureStore } from "@reduxjs/toolkit";
import docReducer from "./features/docSlice";

export const store = configureStore({
  reducer: {
    docs: docReducer,
  },
});
