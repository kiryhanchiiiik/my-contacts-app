import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "./redux/filtersSlice";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { selectError, selectIsLoading } from "./redux/selectors";
import { selectContacts } from "./redux/contactsSlice";
import "./App.css";
function App() {
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
    <div>
      <h1>
        <HiDevicePhoneMobile />
        Phonebook
      </h1>
      <ContactForm />
      <SearchBox onFilterChange={handleFilterChange} />
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <b>Something wrong</b>}
      <ContactList contacts={items} />
    </div>
  );
}

export default App;
