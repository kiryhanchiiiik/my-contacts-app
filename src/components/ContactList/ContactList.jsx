import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  // const filteredContacts = Array.isArray(contacts)
  //   ? contacts.filter((contact) =>
  //       contact.name.toLowerCase().includes(filter.toLowerCase())
  //     )
  //   : [];
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactsList}>
      {filteredContacts &&
        filteredContacts.map((contact) => {
          return <Contact key={contact.id} contact={contact} />;
        })}
    </ul>
  );
};

export default ContactList;
