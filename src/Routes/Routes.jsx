import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import News from "../pages/News/News";
import Gallery from "../pages/Gallery/Gallery";
import Login from "../pages/Login/Login";
import AddTeacher from "../pages/Admin/AddTeacher";
import AddNews from "../pages/Admin/AddNews";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/News",
        element: <News />,
      },
      {
        path: "/Gallery",
        element: <Gallery />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/addTeacher",
        element: (
          <PrivateRoutes>
            <AddTeacher />
          </PrivateRoutes>
        ),
      },
      {
        path: "/addNews",
        element: (
          <PrivateRoutes>
            <AddNews />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
