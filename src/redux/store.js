import { configureStore } from "@reduxjs/toolkit";
import contactsSlice  from "./contacts/contacts-reduser.js";
import { composeWithDevTools } from "redux-devtools-extension";
import { filterReducer} from "./filter/filter-reducer.js";

export const store = configureStore({
    reducer: {
        contacts: contactsSlice,
         filter: filterReducer,
    },
    devTools: composeWithDevTools,
});
