import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { contactsReducer } from "./contacts/contacts-reduser.js";
import { filterReducer} from "./filter/filter-reducer.js";

const rootReducer = combineReducers({
    items: contactsReducer,
    filter: filterReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;