import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Register from "./pages/Register";
import Course from "./components/Course";
import Login from "./pages/Login";
import Details from "./pages/Details";
import Account from "./pages/Account";
import Contact from "./components/Contact";
import { Verfication } from "./components/Verfication";
import Confirmation from "./components/Confirmation";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/signup",
      //   element: <Signup />,
      // },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/courses",
        element: <Course />,
      },
      {
        path: "/details",
        element: <Details />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/verify",
        element: <Verfication/>,
      },
      {
        path: "/confirmation",
        element: <Confirmation />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
