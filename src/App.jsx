import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { refreshUser } from "./redux/auth/operations";
import { selectUserIsRefreshing } from "./redux/auth/selectors";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute.jsx";
import Layout from "./Layout";
import "./App.css";
import { Toaster } from "react-hot-toast";

const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage.jsx")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage.jsx"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectUserIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Suspense fallback={<p>Loading...</p>}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<RegistrationPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  component={<LoginPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactPage />} />}
            />
          </Routes>
        </Layout>
      </Suspense>
    </div>
  );
}

export default App;
