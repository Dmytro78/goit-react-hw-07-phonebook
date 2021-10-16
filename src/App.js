import ContactList from "./component/Contacts/ContactList";
import Form from "./component/Form/Form";
import Filter from "./component/Filter/Filter";

import css from "./App.css";


export default function App() {

       return (
      <>
        <h1 className={css}>Phonebook</h1>
        <Form />
        <h2 className={css}>Contacts</h2>
        <Filter />
        <ContactList/>
      </>
  );
}
 