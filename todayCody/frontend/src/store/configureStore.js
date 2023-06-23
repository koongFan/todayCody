import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebar";

export const store = configureStore({
  reducer: { sidebar: sidebarReducer },
});
