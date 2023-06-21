import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Posts from "../pages/Posts/Posts";
import Gallery from "../pages/Gallery/Gallery";
import Login from "../pages/Login/Login";
import Teachers from "../pages/About/Teachers";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import DashboardLayout from "../Layouts/DashboardLayout";
import ManageUsers from "../pages/Dashboard/ManageUsers";
import ManagePosts from "../pages/Dashboard/ManagePosts";
import UpdateUser from "../pages/Dashboard/UpdateUser";
import TeacherDetails from "../pages/About/TeacherDetails";
import AddAPost from "../pages/Dashboard/AddAPost";
import MyPosts from "../pages/Dashboard/MyPosts";
import DetailsPost from "../pages/Dashboard/DetailsPost";
import PostDetails from "../pages/Posts/PostDetails";
import HomePostDetails from "../pages/Home/HomePostDetails";
import PrivateRoutes from "./PrivateRoutes";
import AddPromo from "../pages/Dashboard/AddPromo";

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
        path: "/posts/:id",
        element: <HomePostDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/posts/${params.id}`),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/about/teacherDetails/:id",
        element: <TeacherDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/users/${params.id}`),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/posts/:id",
        element: <PostDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/posts/${params.id}`),
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
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard/manageUsers",
        element: <ManageUsers />,
      },
      {
        path: "/dashboard/managePosts",
        element: <ManagePosts />,
      },
      {
        path: "/dashboard/addPromo",
        element: <AddPromo />,
      },
      {
        path: "/dashboard/manageUsers/updateUser/:id",
        element: <UpdateUser />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/users/${params.id}`),
      },
      {
        path: "/dashboard/managePosts/detailsPost/:id",
        element: <DetailsPost />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/posts/${params.id}`),
      },
      {
        path: "/dashboard/addAPost",
        element: <AddAPost />,
      },
      {
        path: "/dashboard/myPosts",
        element: <MyPosts />,
      },
    ],
  },
]);

export default router;
