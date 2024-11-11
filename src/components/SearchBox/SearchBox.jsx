import { FaUsersViewfinder } from "react-icons/fa6";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/contacts/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div>
      <p>
        <FaUsersViewfinder /> Find contacts by name
      </p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
