// import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
const AppBar = () => {
  // const isLoggedIn = useSelector();
  return (
    <header>
      <Navigation />
      <AuthNav />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
};

export default AppBar;
