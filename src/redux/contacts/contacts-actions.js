import { createAction } from "@reduxjs/toolkit";
import { ADD_CONTACT, REMOVE_CONTACT } from "../action-types.js";
import { v4 as uuidv4 } from 'uuid';

export const addContact = createAction(ADD_CONTACT, (name, number) => ({
    payload: { name, number, id: uuidv4() },
}));

export const removeContact = createAction(REMOVE_CONTACT);