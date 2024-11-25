import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Shared/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Services from "../Pages/Services/Services";
import AddService from "../Pages/AddService/AddService";
import BookedService from "../Pages/BookedService/BookedService";
import ManageService from "../Pages/ManageService/ManageService";
import ServiceTodo from "../Pages/ServiceTodo/ServiceTodo";
import Login from "../Pages/Registration/Login/Login";
import Register from "../Pages/Registration/Register/Register";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/add-service",
        element: <AddService />,
      },
      {
        path: "/manage-service",
        element: <ManageService />,
      },
      {
        path: "/booked-service",
        element: <BookedService />,
      },
      {
        path: "/service-to-do",
        element: <ServiceTodo />,
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
]);
