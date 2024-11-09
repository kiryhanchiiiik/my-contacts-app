import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";
const buildLinkStyle = ({ isActive }) => clsx(css.link, isActive && css.active);
const AuthNav = () => {
  return (
    <nav className={css.navigation}>
      <NavLink to="/register" className={buildLinkStyle}>
        Register
      </NavLink>
      <NavLink to="/login" className={buildLinkStyle}>
        Log In
      </NavLink>
    </nav>
  );
};

export default AuthNav;
