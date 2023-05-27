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
import Teachers from "../pages/About/Teachers";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
        loader: () =>
          fetch(
            `https://132-no-hazi-abdul-jalil-munshi-govt-prim-folisonjayson-gmailcom.vercel.app/teachers`
          ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/posts",
        element: <News />,
        loader: () =>
          fetch(
            `https://132-no-hazi-abdul-jalil-munshi-govt-prim-folisonjayson-gmailcom.vercel.app/posts`
          ),
      },
      {
        path: "/Gallery",
        element: <Gallery />,
      },
      {
        path: "/teachers",
        element: <Teachers />,
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
        path: "/addPosts",
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
