// import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
const AppBar = () => {
  return (
    <header>
      <Navigation />
      <AuthNav />
    </header>
  );
};

export default AppBar;

// const isLoggedIn = useSelector();
{
  /* {isLoggedIn ? <UserMenu /> : <AuthNav />} */
}
