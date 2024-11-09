import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  const getUser = useSelector(selectUser);
  return (
    <div className={css.userMenu}>
      <p className={css.welcome}>Welcome, {getUser.name}</p>
      <button onClick={onLogout} type="button" className={css.button}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
