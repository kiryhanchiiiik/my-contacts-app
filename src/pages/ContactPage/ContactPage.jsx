import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { selectError, selectIsLoading } from "../../redux/contacts/selectors";
import { selectContacts } from "../../redux/contacts/slice";
import ContactList from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";
import { changeFilter } from "../../redux/filters/slice";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import css from "./ContactPage.module.css";
const TaskPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleFilterChange = (newFilter) => {
    dispatch(changeFilter(newFilter));
  };
  return (
    <div className={css.container}>
      <h1>
        <HiDevicePhoneMobile />
        Phonebook
      </h1>
      <ContactForm />
      <SearchBox onFilterChange={handleFilterChange} />
      {items !== null && items.length === 0 && (
        <p>There are no contacts in your phonebook yet</p>
      )}
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <b>Something wrong</b>}
      <ContactList contacts={items} />
    </div>
  );
};

export default TaskPage;
