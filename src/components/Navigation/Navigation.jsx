import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
const buildLinkStyle = ({ isActive }) => clsx(css.link, isActive && css.active);
const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <NavLink className={buildLinkStyle} to="/">
        Home
      </NavLink>
      <NavLink className={buildLinkStyle} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
