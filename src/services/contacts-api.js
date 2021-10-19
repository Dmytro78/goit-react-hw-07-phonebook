import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3030';

export async function fetchContactsApi() {
    const { data } = await axios.get('/contacts');
    return data;
}

export const addContact = (contact) => {
  return axios.post("/contacts", contact).then(({ data }) => data);
};

export const deleteContact = (contactId) => {
  return axios.delete(`/contacts/${contactId}`);
};