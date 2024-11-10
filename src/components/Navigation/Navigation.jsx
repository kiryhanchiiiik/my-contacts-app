import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectUserIsLoggedIn } from "../../redux/auth/selectors";
const buildLinkStyle = ({ isActive }) => clsx(css.link, isActive && css.active);
const Navigation = () => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);
  return (
    <nav className={css.navigation}>
      <NavLink className={buildLinkStyle} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildLinkStyle} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
