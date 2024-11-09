// import { useSelector } from "react-redux";
import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";
import { selectUserIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
const AppBar = () => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);
  return (
    <header className={css.headerContainer}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
