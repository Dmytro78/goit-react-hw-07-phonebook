import { createReducer } from "@reduxjs/toolkit";
import { filter } from "./filter-actions.js";

export const filterReducer = createReducer("", { [filter]: (state, action) => action.payload, });