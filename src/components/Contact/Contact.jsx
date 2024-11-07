import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <li className={css.contactListItm}>
      <div>
        <p>
          <FaUser /> {contact.name}
        </p>
        <p>
          <FaPhone /> {contact.number}
        </p>
      </div>
      <button onClick={handleDelete} type="button">
        Delete
      </button>
    </li>
  );
};

export default Contact;
