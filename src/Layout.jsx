import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
