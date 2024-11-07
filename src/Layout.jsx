// import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};

export default Layout;
