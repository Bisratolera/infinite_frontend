import { Outlet, useLocation } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import "./index.css";

function App() {
  const location = useLocation();
  const hideNavAndFooterPaths = [
    "/register",
    "/login",
    "/verify",
    "/confirmation",
    "/account",
  ];

  const shouldHideNavAndFooter = hideNavAndFooterPaths.includes(
    location.pathname
  );

  return (
    <div
      className={`App dark:bg-gray-950 dark:text-white ${
        shouldHideNavAndFooter
          ? "min-h-screen flex items-center justify-center"
          : ""
      }`}
    >
      {!shouldHideNavAndFooter && <Nav />}
      <Outlet />
      {!shouldHideNavAndFooter && <Footer />}
    </div>
  );
}

export default App;
