import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { selectError, selectIsLoading } from "./redux/contacts/selectors";
import { selectContacts } from "./redux/contacts/slice";
import { changeFilter } from "./redux/filters/slice";
import { fetchContacts } from "./redux/contacts/operations";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {/* <h1>
        <HiDevicePhoneMobile />
        Phonebook
      </h1>
      <ContactForm />
      <SearchBox onFilterChange={handleFilterChange} />
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <b>Something wrong</b>}
      <ContactList contacts={items} /> */}
    </div>
  );
}

export default App;
